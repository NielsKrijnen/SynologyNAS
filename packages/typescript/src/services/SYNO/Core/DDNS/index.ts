import type { Client } from "$/client"
import { SYNO_Core_DDNS_Ethernet } from "$/services/SYNO/Core/DDNS/Ethernet"

export class SYNO_Core_DDNS {
  constructor(private client: Client) {}

  get Ethernet() {
    return new SYNO_Core_DDNS_Ethernet(this.client)
  }
}
