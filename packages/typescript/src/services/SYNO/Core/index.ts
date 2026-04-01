import type { Client } from "$/client"
import { SYNO_Core_AppNotify } from "$/services/SYNO/Core/AppNotify"

export class SYNO_Core {
  constructor(private client: Client) {}

  get AppNotify() {
    return new SYNO_Core_AppNotify(this.client)
  }
}
