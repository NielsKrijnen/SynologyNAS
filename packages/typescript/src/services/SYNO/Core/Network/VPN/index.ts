import type { Client } from "$/client"
import { SYNO_Core_Network_VPN_L2TP } from "$/services/SYNO/Core/Network/VPN/L2TP"
import { SYNO_Core_Network_VPN_OpenVPN } from "$/services/SYNO/Core/Network/VPN/OpenVPN"
import { SYNO_Core_Network_VPN_OpenVPNWithConf } from "$/services/SYNO/Core/Network/VPN/OpenVPNWithConf"
import { SYNO_Core_Network_VPN_PPTP } from "$/services/SYNO/Core/Network/VPN/PPTP"

export class SYNO_Core_Network_VPN {
  constructor(private client: Client) {}

  get L2TP() {
    return new SYNO_Core_Network_VPN_L2TP(this.client)
  }

  get OpenVPN() {
    return new SYNO_Core_Network_VPN_OpenVPN(this.client)
  }

  get OpenVPNWithConf() {
    return new SYNO_Core_Network_VPN_OpenVPNWithConf(this.client)
  }

  get PPTP() {
    return new SYNO_Core_Network_VPN_PPTP(this.client)
  }
}
