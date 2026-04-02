import type { Client } from "$/client"

export class SYNO_Core_Network_OVS {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Network_OVS_get_Response>("SYNO.Core.Network.OVS", "get", 1)
  }
}

type SYNO_Core_Network_OVS_get_Response = { enable_ovs: boolean }
