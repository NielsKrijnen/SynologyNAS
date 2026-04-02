import type { Client } from "$/client"

export class SYNO_Core_Network_VPN_OpenVPN {
  constructor(private client: Client) {}

  list(params: SYNO_Core_Network_VPN_OpenVPN_list_Params) {
    return this.client.get<SYNO_Core_Network_VPN_OpenVPN_list_Response>(
      "SYNO.Core.Network.VPN.OpenVPN",
      "list",
      1,
      params
    )
  }
}

type SYNO_Core_Network_VPN_OpenVPN_list_Response = unknown[]
type SYNO_Core_Network_VPN_OpenVPN_list_Params = { additional?: "status"[] }
