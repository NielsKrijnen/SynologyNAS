import type { Client } from "$/client"

export class SYNO_Core_Network_Router_Gateway_List {
  constructor(private client: Client) {}

  get(params: SYNO_Core_Network_Router_Gateway_List_get_Params) {
    return this.client.get<SYNO_Core_Network_Router_Gateway_List_get_Response>(
      "SYNO.Core.Network.Router.Gateway.List",
      "get",
      1,
      params
    )
  }
}

type SYNO_Core_Network_Router_Gateway_List_get_Response = {
  configs: { class: string; dns: string; gateway: string; ifname: string; priority: number; slave: boolean }[]
}
type SYNO_Core_Network_Router_Gateway_List_get_Params = { iptype: "ipv4"; type: "wan" }
