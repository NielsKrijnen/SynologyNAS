import type { Client } from "$/client"
import { SYNO_Core_Network_Ethernet_External } from "$/services/SYNO/Core/Network/Ethernet/External"

export class SYNO_Core_Network_Ethernet {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Network_Ethernet_list_Response>("SYNO.Core.Network.Ethernet", "list", 2)
  }

  get External() {
    return new SYNO_Core_Network_Ethernet_External(this.client)
  }
}

type SYNO_Core_Network_Ethernet_list_Response = {
  block: number
  dns: string
  duplex: boolean
  enable_ha_ip: boolean
  enable_vlan: boolean
  gateway: string
  ha_local_ip: string
  ha_local_mask: string
  ifname: string
  ip: string
  ipv6: unknown[]
  is_default_gateway: boolean
  is_main_ha_ip: boolean
  mask: string
  max_supported_speed: number
  mtu: number
  mtu_config: number
  nat: boolean
  speed: number
  status: string
  type: string
  use_dhcp: boolean
  vlan_id: number
}[]
