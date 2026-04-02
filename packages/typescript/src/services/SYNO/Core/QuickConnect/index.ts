import type { Client } from "$/client"
import { SYNO_Core_QuickConnect_Permission } from "$/services/SYNO/Core/QuickConnect/Permission"

export class SYNO_Core_QuickConnect {
  constructor(private client: Client) {}

  check_availability() {
    return this.client.get<SYNO_Core_QuickConnect_check_availability_Response>(
      "SYNO.Core.QuickConnect",
      "check_availability",
      3
    )
  }

  get() {
    return this.client.get<SYNO_Core_QuickConnect_get_Response>("SYNO.Core.QuickConnect", "get", 2)
  }

  status() {
    return this.client.get<SYNO_Core_QuickConnect_status_Response>("SYNO.Core.QuickConnect", "status", 1)
  }

  get Permission() {
    return new SYNO_Core_QuickConnect_Permission(this.client)
  }
}

type SYNO_Core_QuickConnect_check_availability_Response = { available: boolean; code: number; country: string }
type SYNO_Core_QuickConnect_get_Response = {
  ddns_domain: string
  domain: string
  enabled: boolean
  myds_account: string
  region: string
  server_alias: string
  server_id: string
}
type SYNO_Core_QuickConnect_status_Response = { alias_status: string; status: string }
