import type { Client } from "$/client"

export class SYNO_Core_DSMNotify_Strings {
  constructor(private client: Client) {}

  get(params: SYNO_Core_DSMNotify_Strings_get_Params) {
    return this.client.get("SYNO.Core.DSMNotify.Strings", "get", 1, params)
  }
}

type SYNO_Core_DSMNotify_Strings_get_Params = { lang: string }
