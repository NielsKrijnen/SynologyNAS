import type { Client } from "$/client"

export class SYNO_Core_DDNS_Provider {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_DDNS_Provider_list_Response>("SYNO.Core.DDNS.Provider", "list", 1)
  }
}

type SYNO_Core_DDNS_Provider_list_Response = { providers: { id: string; provider: string; website: string }[] }
