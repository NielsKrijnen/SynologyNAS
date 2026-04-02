import type { Client } from "$/client"

export class SYNO_Core_DDNS_Ethernet {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_DDNS_Ethernet_list_Response>("SYNO.Core.DDNS.Ethernet", "list", 1)
  }
}

type SYNO_Core_DDNS_Ethernet_list_Response = { ifname: string; ip: string; ipv6: unknown[] }[]
