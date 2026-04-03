import type { Client } from "$/client"

export class SYNO_Core_Security_Firewall_Conf {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Security_Firewall_Conf_get_Response>("SYNO.Core.Security.Firewall.Conf", "get", 1)
  }
}

type SYNO_Core_Security_Firewall_Conf_get_Response = { enable_port_check: boolean }
