import type { Client } from "$/client"

export class SYNO_Core_Notification_Mail_Conf {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Notification_Mail_Conf_get_Response>("SYNO.Core.Notification.Mail.Conf", "get", 2)
  }
}

type SYNO_Core_Notification_Mail_Conf_get_Response = {
  enable_mail: boolean
  enable_oauth: boolean
  in_use: unknown[]
  mail: unknown[]
  send_welcome_mail: boolean
  sender_mail: string
  sender_name: string
  smtp_auth: { enable: boolean; user: string }
  smtp_info: { port: number; server: string; ssl: boolean; verifyCert: boolean }
  subject_prefix: string
}
