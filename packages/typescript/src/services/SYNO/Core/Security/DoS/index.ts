import type { Client } from "$/client"

export class SYNO_Core_Security_DoS {
  constructor(private client: Client) {}

  get(params?: SYNO_Core_Security_DoS_get_Params) {
    return this.client.get<SYNO_Core_Security_DoS_get_Response>("SYNO.Core.Security.DoS", "get", 2, params)
  }
}

type SYNO_Core_Security_DoS_get_Response = { adapter: string; dos_protect_enable: boolean }[]
type SYNO_Core_Security_DoS_get_Params = { configs?: { adapter: string }[] }
