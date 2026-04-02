import type { Client } from "$/client"
import { SYNO_Core_Network_Bond } from "$/services/SYNO/Core/Network/Bond"
import { SYNO_Core_Network_Ethernet } from "$/services/SYNO/Core/Network/Ethernet"
import { SYNO_Core_Network_Interface } from "$/services/SYNO/Core/Network/Interface"
import { SYNO_Core_Network_OVS } from "$/services/SYNO/Core/Network/OVS"
import { SYNO_Core_Network_PPPoE } from "$/services/SYNO/Core/Network/PPPoE"
import { SYNO_Core_Network_Proxy } from "$/services/SYNO/Core/Network/Proxy"
import { SYNO_Core_Network_Router } from "$/services/SYNO/Core/Network/Router"
import { SYNO_Core_Network_TrafficControl } from "$/services/SYNO/Core/Network/TrafficControl"
import { SYNO_Core_Network_VPN } from "$/services/SYNO/Core/Network/VPN"

export class SYNO_Core_Network {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Network_get_Response>("SYNO.Core.Network", "get", 2)
  }

  get Bond() {
    return new SYNO_Core_Network_Bond(this.client)
  }

  get Ethernet() {
    return new SYNO_Core_Network_Ethernet(this.client)
  }

  get Interface() {
    return new SYNO_Core_Network_Interface(this.client)
  }

  get OVS() {
    return new SYNO_Core_Network_OVS(this.client)
  }

  get PPPoE() {
    return new SYNO_Core_Network_PPPoE(this.client)
  }

  get Proxy() {
    return new SYNO_Core_Network_Proxy(this.client)
  }

  get Router() {
    return new SYNO_Core_Network_Router(this.client)
  }

  get TrafficControl() {
    return new SYNO_Core_Network_TrafficControl(this.client)
  }

  get VPN() {
    return new SYNO_Core_Network_VPN(this.client)
  }
}

type SYNO_Core_Network_get_Response = {
  arp_ignore: boolean
  dns_manual: boolean
  dns_primary: string
  dns_secondary: string
  enable_spectre_meltdown_mitigation: boolean
  enable_windomain: boolean
  gateway: string
  gateway_info: { ifname: string; ip: string; mask: string; status: string; type: string; use_dhcp: boolean }
  ipv4_first: boolean
  multi_gateway: boolean
  server_name: string
  use_dhcp_domain: boolean
  v6gateway: string
}
