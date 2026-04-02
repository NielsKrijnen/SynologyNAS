import type { Client } from "$/client"
import { SYNO_Core_Notification_Advance } from "$/services/SYNO/Core/Notification/Advance"
import { SYNO_Core_Notification_Mail } from "$/services/SYNO/Core/Notification/Mail"
import { SYNO_Core_Notification_Push } from "$/services/SYNO/Core/Notification/Push"

export class SYNO_Core_Notification {
  constructor(private client: Client) {}

  get Advance() {
    return new SYNO_Core_Notification_Advance(this.client)
  }

  get Mail() {
    return new SYNO_Core_Notification_Mail(this.client)
  }

  get Push() {
    return new SYNO_Core_Notification_Push(this.client)
  }
}
