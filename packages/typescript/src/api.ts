import { Client } from "$/client"
import { SYNO } from "$/services/SYNO"
import type { Options } from "$/types"

export class API {
  readonly client: Client

  constructor(options: Options) {
    const baseUrl =
      "quickconnect" in options
        ? `https://${options.quickconnect}.de7.quickconnect.to`
        : `${options.server.scheme ?? "https"}://${options.server.host}:${options.server.port}`

    this.client = new Client(baseUrl, {
      sid: options.sid,
      synoToken: options.synoToken
    })
  }

  get SYNO() {
    return new SYNO(this.client)
  }
}
