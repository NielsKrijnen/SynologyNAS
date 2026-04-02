import type { Client } from "$/client"
import { SYNO_Core_AppNotify } from "$/services/SYNO/Core/AppNotify"
import { SYNO_Core_AppPortal } from "$/services/SYNO/Core/AppPortal"
import { SYNO_Core_BackgroundTask } from "$/services/SYNO/Core/BackgroundTask"
import { SYNO_Core_Certificate } from "$/services/SYNO/Core/Certificate"
import { SYNO_Core_CMS } from "$/services/SYNO/Core/CMS"
import { SYNO_Core_CurrentConnection } from "$/services/SYNO/Core/CurrentConnection"
import { SYNO_Core_DDNS } from "$/services/SYNO/Core/DDNS"

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

  get Certificate() {
    return new SYNO_Core_Certificate(this.client)
  }

  get CMS() {
    return new SYNO_Core_CMS(this.client)
  }

  get CurrentConnection() {
    return new SYNO_Core_CurrentConnection(this.client)
  }

  get DDNS() {
    return new SYNO_Core_DDNS(this.client)
  }
}
