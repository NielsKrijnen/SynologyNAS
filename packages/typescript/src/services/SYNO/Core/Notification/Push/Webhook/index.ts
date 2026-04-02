import type { Client } from "$/client"
import { SYNO_Core_Notification_Push_Webhook_Provider } from "$/services/SYNO/Core/Notification/Push/Webhook/Provider"

export class SYNO_Core_Notification_Push_Webhook {
  constructor(private client: Client) {}

  get Provider() {
    return new SYNO_Core_Notification_Push_Webhook_Provider(this.client)
  }
}
