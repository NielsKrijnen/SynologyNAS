import type { Client } from "$/client"

export class SYNO_Core_Notification_Advance_FilterSettings_Profile {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Notification_Advance_FilterSettings_Profile_list_Response>(
      "SYNO.Core.Notification.Advance.FilterSettings.Profile",
      "list",
      1
    )
  }
}

type SYNO_Core_Notification_Advance_FilterSettings_Profile_list_Response = { profiles: unknown[] }
