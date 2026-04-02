import type { Client } from "$/client"
import { SYNO_Core_DSMNotify_Strings } from "$/services/SYNO/Core/DSMNotify/Strings"

export class SYNO_Core_DSMNotify {
  constructor(private client: Client) {}

  async notify(params: SYNO_Core_DSMNotify_notify_Params) {
    await this.client.get("SYNO.Core.DSMNotify", "notify", 1, params)
  }

  get Strings() {
    return new SYNO_Core_DSMNotify_Strings(this.client)
  }
}

type SYNO_Core_DSMNotify_notify_Params = { action: "apply"; clean?: "all" }
