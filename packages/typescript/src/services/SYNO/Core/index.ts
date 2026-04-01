import type { Client } from "$/client"
import { SYNO_Core_AppNotify } from "$/services/SYNO/Core/AppNotify"
import { SYNO_Core_AppPortal } from "$/services/SYNO/Core/AppPortal"
import { SYNO_Core_BackgroundTask } from "$/services/SYNO/Core/BackgroundTask"

export class SYNO_Core {
  constructor(private client: Client) {}

  get AppNotify() {
    return new SYNO_Core_AppNotify(this.client)
  }

  get AppPortal() {
    return new SYNO_Core_AppPortal(this.client)
  }

  get BackgroundTask() {
    return new SYNO_Core_BackgroundTask(this.client)
  }
}
