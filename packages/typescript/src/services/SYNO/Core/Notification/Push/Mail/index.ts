import type { Client } from "$/client"

export class SYNO_Core_Notification_Push_Mail {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Notification_Push_Mail_get_Response>("SYNO.Core.Notification.Push.Mail", "get", 2)
  }
}

type SYNO_Core_Notification_Push_Mail_get_Response = {
  enable_mail: boolean
  mail: unknown[]
  subject_prefix: string
  template_id: number
}
