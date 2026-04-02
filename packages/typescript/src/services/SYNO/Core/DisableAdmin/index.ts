import type { Client } from "$/client"

export class SYNO_Core_DisableAdmin {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_DisableAdmin_get_Response>("SYNO.Core.DisableAdmin", "get", 1)
  }
}

type SYNO_Core_DisableAdmin_get_Response = { notify_disable_admin: boolean }
