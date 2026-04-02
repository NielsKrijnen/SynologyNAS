import type { Client } from "$/client"

export class SYNO_Core_DDNS_ExtIP {
  constructor(private client: Client) {}

  list(params?: SYNO_Core_DDNS_ExtIP_list_Params) {
    return this.client.get<SYNO_Core_DDNS_ExtIP_list_Response>("SYNO.Core.DDNS.ExtIP", "list", 2, params)
  }
}

type SYNO_Core_DDNS_ExtIP_list_Response = { ip: string; ipv6: string; type: "WAN" }[]
type SYNO_Core_DDNS_ExtIP_list_Params = { retry?: boolean }
