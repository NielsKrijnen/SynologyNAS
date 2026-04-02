import type { Client } from "$/client"
import { SYNO_Core_Notification_Push_Mail } from "$/services/SYNO/Core/Notification/Push/Mail"
import { SYNO_Core_Notification_Push_Webhook } from "$/services/SYNO/Core/Notification/Push/Webhook"

export class SYNO_Core_Notification_Push {
  constructor(private client: Client) {}

  get Mail() {
    return new SYNO_Core_Notification_Push_Mail(this.client)
  }

  get Webhook() {
    return new SYNO_Core_Notification_Push_Webhook(this.client)
  }
}
