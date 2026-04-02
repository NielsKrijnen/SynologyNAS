import type { Client } from "$/client"

export class SYNO_Core_DDNS_Synology {
  constructor(private client: Client) {}

  get_myds_account() {
    return this.client.get<SYNO_Core_DDNS_Synology_get_myds_account_Response>(
      "SYNO.Core.DDNS.Synology",
      "get_myds_account",
      1
    )
  }
}

type SYNO_Core_DDNS_Synology_get_myds_account_Response = { email: string }
