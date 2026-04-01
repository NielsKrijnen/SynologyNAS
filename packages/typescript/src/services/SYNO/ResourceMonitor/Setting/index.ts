import type { Client } from "$/client"

export class SYNO_ResourceMonitor_Setting {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_ResourceMonitor_Setting_get_Response>("SYNO.ResourceMonitor.Setting", "get", 1)
  }

  async set(params: SYNO_ResourceMonitor_Setting_set_Params) {
    await this.client.get("SYNO.ResourceMonitor.Setting", "set", 1, params)
  }
}

type SYNO_ResourceMonitor_Setting_get_Response = { enable_history: boolean }
type SYNO_ResourceMonitor_Setting_set_Params = { enable_history: boolean }
