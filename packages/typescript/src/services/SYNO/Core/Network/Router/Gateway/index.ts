import type { Client } from "$/client"
import { SYNO_Core_Network_Router_Gateway_List } from "$/services/SYNO/Core/Network/Router/Gateway/List"

export class SYNO_Core_Network_Router_Gateway {
  constructor(private client: Client) {}

  get List() {
    return new SYNO_Core_Network_Router_Gateway_List(this.client)
  }
}
