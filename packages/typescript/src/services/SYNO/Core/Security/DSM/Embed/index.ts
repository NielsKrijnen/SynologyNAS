import type { Client } from "$/client"

export class SYNO_Core_Security_DSM_Embed {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Security_DSM_Embed_get_Response>("SYNO.Core.Security.DSM.Embed", "get", 1)
  }
}

type SYNO_Core_Security_DSM_Embed_get_Response = { enable_block: boolean; whitelist: string[] }
