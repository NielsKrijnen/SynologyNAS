import type { Client } from "$/client"

export class SYNO_Core_Network_PPPoE {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Network_PPPoE_list_Response>("SYNO.Core.Network.PPPoE", "list", 1)
  }
}

type SYNO_Core_Network_PPPoE_list_Response = {
  devs: string[]
  guest_enabled: boolean
  ifname: string
  ip: string
  is_default_gateway: number
  mask: string
  mtu_config: string
  password: string
  real_ifname: string
  status: string
  type: string
  use_dhcp: boolean
  username: string
}[]
