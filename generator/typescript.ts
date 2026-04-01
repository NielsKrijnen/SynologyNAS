import { execSync } from "node:child_process"
import path from "node:path"
import {
  type ClassDeclaration,
  type CodeBlockWriter,
  type ParameterDeclarationStructure,
  Project,
  QuoteKind,
  Scope,
  type SourceFile,
  StructureKind
} from "ts-morph"
import { type Definition, type Property, registry } from "../config/types.ts"

const base = path.join(__dirname, "..", "packages", "typescript")

const apiFile = path.join(base, "src", "api.ts")

const project = new Project({
  manipulationSettings: {
    quoteKind: QuoteKind.Double
  }
})

const file = project.createSourceFile(apiFile, "", { overwrite: true })

file.addImportDeclaration({
  namedImports: ["Client"],
  moduleSpecifier: "$/client"
})
file.addImportDeclaration({
  isTypeOnly: true,
  namedImports: ["Options"],
  moduleSpecifier: "$/types"
})

const apiClass = file.addClass({
  name: "API",
  isExported: true
})

apiClass.addProperty({
  name: "client",
  type: "Client",
  isReadonly: true
})

apiClass.addConstructor({ parameters: [{ name: "options", type: "Options" }] }).setBodyText(writer => {
  writer.writeLine("const baseUrl =")
  writer.indent(() => {
    writer.writeLine('"quickconnect" in options')
    writer.writeLine(`  ? \`https://\${options.quickconnect}.de7.quickconnect.to\``)
    writer.writeLine(`  : \`\${options.server.scheme ?? "https"}://\${options.server.host}:\${options.server.port}\``)
  })

  writer.blankLine()

  writer.writeLine("this.client = new Client(baseUrl, {")
  writer.indent(() => {
    writer.writeLine("sid: options.sid,")
    writer.writeLine("synoToken: options.synoToken")
  })
  writer.writeLine("})")
})

for (const [key, api] of Object.entries(registry.apis)) {
  addAPI(file, apiClass, [key], api)
}

function addAPI(file: SourceFile, apiClass: ClassDeclaration, keys: string[], api: Definition) {
  file.addImportDeclaration({
    namedImports: [keys.join("_")],
    moduleSpecifier: `$/services/${keys.join("/")}`
  })

  apiClass.addGetAccessor({
    name: keys[keys.length - 1] as string,
    statements: `return new ${keys.join("_")}(this.client)`
  })

  const filePath = path.join(base, "src", "services", `${keys.join("/")}/index.ts`)
  const sourceFile = project.createSourceFile(filePath, "", { overwrite: true })

  sourceFile.addImportDeclaration({
    namedImports: ["Client"],
    moduleSpecifier: "$/client",
    isTypeOnly: true
  })

  const newApiClass = sourceFile.addClass({
    name: keys.join("_"),
    isExported: true
  })

  newApiClass.addConstructor({
    parameters: [{ name: "client", type: "Client", scope: Scope.Private }]
  })

  if (api.methods) {
    for (const [key, methodVersions] of Object.entries(api.methods)) {
      const version = Math.max(...Object.keys(methodVersions).map(Number))
      const method = methodVersions[version]
      if (!method) continue

      if (method.response) {
        sourceFile.addTypeAlias({
          name: `${keys.join("_")}_${key}_Response`,
          type: writer => {
            if (method.response) writeType(writer, method.response)
          }
        })
      }

      if (method.params) {
        sourceFile.addTypeAlias({
          name: `${keys.join("_")}_${key}_Params`,
          type: writer => {
            if (method.params) writeType(writer, method.params)
          }
        })
      }

      const type = method.response ? `<${keys.join("_")}_${key}_Response>` : ""
      const params: ParameterDeclarationStructure | undefined = method.params
        ? {
            name: "params",
            type: `${keys.join("_")}_${key}_Params`,
            hasQuestionToken: method.params.optional,
            kind: StructureKind.Parameter
          }
        : undefined

      const paramsString = params
        ? method.defaultParams
          ? `, ${JSON.stringify(method.defaultParams).replace("}", ",...params}")}`
          : ", params"
        : ""

      newApiClass.addMethod({
        name: key,
        parameters: params ? [params] : undefined,
        isAsync: !!method.setSession || method.respond === false,
        statements: writer => {
          const functionCall = `this.client.get${type}("${keys.join(".")}", "${key}", ${version}${paramsString})`
          if (method.setSession) {
            const responseHandle =
              method.respond === false
                ? "key" in method.setSession.sid || "key" in method.setSession.sid
                  ? "const response = "
                  : ""
                : "const response = "
            writer.writeLine(`${responseHandle}await ${functionCall}`)
            writer.blankLine()

            const sid =
              "key" in method.setSession.sid
                ? `response.${method.setSession.sid.key}`
                : method.setSession.sid.value === null
                  ? "null"
                  : method.setSession.sid.value
            const synotoken =
              "key" in method.setSession.synotoken
                ? `response.${method.setSession.synotoken.key}`
                : method.setSession.synotoken.value === null
                  ? "null"
                  : method.setSession.synotoken.value

            writer.writeLine(`this.client.setSession(${sid}, ${synotoken})`)

            if (method.respond !== false) {
              writer.blankLine()
              writer.write("return response")
            }
          } else {
            writer.write(`${method.respond === false ? "await" : "return"} ${functionCall}`)
          }
        }
      })
    }
  }

  if (api.apis) {
    for (const [key, newApi] of Object.entries(api.apis)) {
      addAPI(sourceFile, newApiClass, [...keys, key], newApi)
    }
  }
}

function writeType(writer: CodeBlockWriter, property: Property) {
  if (property.type === "string") {
    writer.write("string")
  } else if (property.type === "boolean") {
    writer.write("boolean")
  } else if (property.type === "integer" || property.type === "float") {
    writer.write("number")
  } else if (property.type === "binary") {
    writer.write("Blob | File")
  } else if (property.type === "array") {
    writer.write("(")
    writeType(writer, property.items)
    writer.write(")[]")
  } else if (property.type === "enum") {
    writer.write(property.items.map(item => `"${item}"`).join(" | "))
  } else if (property.type === "object") {
    if (property.items && property.additionalProperties) {
      writer.write("{ ")
      for (const [key, item] of Object.entries(property.items)) {
        writer.write(`"${key}"${item.optional ? "?" : ""}: `)
        writeType(writer, item)
        writer.write("; ")
      }
      writer.write("} & Record<string, ")
      writeType(writer, property.additionalProperties)
      writer.write(">")
    } else if (property.items) {
      writer.write("{ ")
      for (const [key, item] of Object.entries(property.items)) {
        writer.write(`"${key}"${item.optional ? "?" : ""}: `)
        writeType(writer, item)
        writer.write("; ")
      }
      writer.write("}")
    } else if (property.additionalProperties) {
      writer.write("Record<string, ")
      writeType(writer, property.additionalProperties)
      writer.write(">")
    }
  }
}

project.saveSync()

execSync(`bunx biome check --write ${base}`)
