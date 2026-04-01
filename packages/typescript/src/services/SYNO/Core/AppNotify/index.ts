import type { Client } from "$/client"

export class SYNO_Core_AppNotify {
  constructor(private client: Client) {}

  async view(params?: SYNO_Core_AppNotify_view_Params) {
    await this.client.get("SYNO.Core.AppNotify", "view", 1, params)
  }
}

type SYNO_Core_AppNotify_view_Params = { app?: string }
