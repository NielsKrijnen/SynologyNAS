import type { Client } from "$/client"
import { SYNO_ResourceMonitor_Setting } from "$/services/SYNO/ResourceMonitor/Setting"

export class SYNO_ResourceMonitor {
  constructor(private client: Client) {}

  get Setting() {
    return new SYNO_ResourceMonitor_Setting(this.client)
  }
}
