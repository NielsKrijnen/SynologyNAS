import type { Client } from "$/client"

export class SYNO_Core_Notification_Push_Webhook_Provider {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Notification_Push_Webhook_Provider_list_Response>(
      "SYNO.Core.Notification.Push.Webhook.Provider",
      "list",
      2
    )
  }

  async delete(params: SYNO_Core_Notification_Push_Webhook_Provider_delete_Params) {
    await this.client.get("SYNO.Core.Notification.Push.Webhook.Provider", "delete", 2, params)
  }
}

type SYNO_Core_Notification_Push_Webhook_Provider_list_Response = { count: number; list: unknown[] }
type SYNO_Core_Notification_Push_Webhook_Provider_delete_Params = { profile_id: number }
