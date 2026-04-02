import type { Client } from "$/client"
import { SYNO_Core_Network_TrafficControl_Rules } from "$/services/SYNO/Core/Network/TrafficControl/Rules"

export class SYNO_Core_Network_TrafficControl {
  constructor(private client: Client) {}

  get Rules() {
    return new SYNO_Core_Network_TrafficControl_Rules(this.client)
  }
}
