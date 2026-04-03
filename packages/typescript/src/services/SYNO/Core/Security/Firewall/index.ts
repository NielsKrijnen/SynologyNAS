import type { Client } from "$/client"
import { SYNO_Core_Security_Firewall_Conf } from "$/services/SYNO/Core/Security/Firewall/Conf"
import { SYNO_Core_Security_Firewall_Profile } from "$/services/SYNO/Core/Security/Firewall/Profile"

export class SYNO_Core_Security_Firewall {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Security_Firewall_get_Response>("SYNO.Core.Security.Firewall", "get", 1)
  }

  get Conf() {
    return new SYNO_Core_Security_Firewall_Conf(this.client)
  }

  get Profile() {
    return new SYNO_Core_Security_Firewall_Profile(this.client)
  }
}

type SYNO_Core_Security_Firewall_get_Response = { enable_firewall: boolean; profile_name: string }
