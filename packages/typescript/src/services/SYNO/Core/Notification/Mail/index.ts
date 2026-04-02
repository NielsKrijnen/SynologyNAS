import type { Client } from "$/client"
import { SYNO_Core_Notification_Mail_Conf } from "$/services/SYNO/Core/Notification/Mail/Conf"

export class SYNO_Core_Notification_Mail {
  constructor(private client: Client) {}

  get Conf() {
    return new SYNO_Core_Notification_Mail_Conf(this.client)
  }
}
