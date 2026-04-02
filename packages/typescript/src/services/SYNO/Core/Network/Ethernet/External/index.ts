import type { Client } from "$/client"

export class SYNO_Core_Network_Ethernet_External {
  constructor(private client: Client) {}

  check() {
    return this.client.get<SYNO_Core_Network_Ethernet_External_check_Response>(
      "SYNO.Core.Network.Ethernet.External",
      "check",
      1
    )
  }
}

type SYNO_Core_Network_Ethernet_External_check_Response = unknown[]
