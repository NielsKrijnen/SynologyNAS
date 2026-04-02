import type { Client } from "$/client"
import { SYNO_Core_DDNS_Ethernet } from "$/services/SYNO/Core/DDNS/Ethernet"
import { SYNO_Core_DDNS_ExtIP } from "$/services/SYNO/Core/DDNS/ExtIP"
import { SYNO_Core_DDNS_Provider } from "$/services/SYNO/Core/DDNS/Provider"
import { SYNO_Core_DDNS_Record } from "$/services/SYNO/Core/DDNS/Record"
import { SYNO_Core_DDNS_Synology } from "$/services/SYNO/Core/DDNS/Synology"

export class SYNO_Core_DDNS {
  constructor(private client: Client) {}

  get Ethernet() {
    return new SYNO_Core_DDNS_Ethernet(this.client)
  }

  get ExtIP() {
    return new SYNO_Core_DDNS_ExtIP(this.client)
  }

  get Provider() {
    return new SYNO_Core_DDNS_Provider(this.client)
  }

  get Record() {
    return new SYNO_Core_DDNS_Record(this.client)
  }

  get Synology() {
    return new SYNO_Core_DDNS_Synology(this.client)
  }
}
