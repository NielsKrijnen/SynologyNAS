import type { Client } from "$/client"

export class SYNO_Core_AppPortal_Config {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_AppPortal_Config_get_Response>("SYNO.Core.AppPortal.Config", "get", 1)
  }

  async set(params?: SYNO_Core_AppPortal_Config_set_Params) {
    await this.client.get("SYNO.Core.AppPortal.Config", "set", 1, params)
  }
}

type SYNO_Core_AppPortal_Config_get_Response = { show_titlebar: boolean }
type SYNO_Core_AppPortal_Config_set_Params = { show_titlebar?: boolean }
