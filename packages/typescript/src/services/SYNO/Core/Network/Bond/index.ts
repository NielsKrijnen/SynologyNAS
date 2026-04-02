import type { Client } from "$/client"

export class SYNO_Core_Network_Bond {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Network_Bond_list_Response>("SYNO.Core.Network.Bond", "list", 2)
  }
}

type SYNO_Core_Network_Bond_list_Response = unknown[]
