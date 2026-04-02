import type { Client } from "$/client"
import { SYNO_Core_Network_Router_Gateway } from "$/services/SYNO/Core/Network/Router/Gateway"

export class SYNO_Core_Network_Router {
  constructor(private client: Client) {}

  get Gateway() {
    return new SYNO_Core_Network_Router_Gateway(this.client)
  }
}
