export type Registry = {
  apis: Record<string, Definition>
}

export type Definition = {
  /** @example "entry.cgi" */
  path?: string
  methods?: Record<string, Method>
  apis?: Record<string, Definition>
}

export type Method = Record<
  number,
  {
    method?: "GET" | "POST"
    respond?: boolean
    setSession?: {
      sid: { key: string } | { value: string | null }
      synotoken: { key: string } | { value: string | null }
    }
    defaultParams?: Record<string, string | number | boolean | object>
    params?: Property
    response?: Property
  }
>

export type Property = (
  | { type: "binary" | "unknown" | "null" }
  | { type: "string"; exact?: string }
  | { type: "integer" | "float"; exact?: number }
  | { type: "boolean"; exact?: boolean }
  | { type: "options"; items: Property[] }
  | { type: "enum"; items: string[] }
  | { type: "array"; items: Property }
  | {
      type: "object"
      items?: Record<string, Property>
      additionalProperties?: Property
    }
) & {
  optional?: boolean
  description?: string
}
