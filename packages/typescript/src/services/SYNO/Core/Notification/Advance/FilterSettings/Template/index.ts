import type { Client } from "$/client"

export class SYNO_Core_Notification_Advance_FilterSettings_Template {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Notification_Advance_FilterSettings_Template_get_Response>(
      "SYNO.Core.Notification.Advance.FilterSettings.Template",
      "get",
      1
    )
  }
}

type SYNO_Core_Notification_Advance_FilterSettings_Template_get_Response = {
  templates: {
    config: { default_enabled_rule_level: string; default_type: string; is_default: boolean }
    name: string
    template_id: number
    used_by: unknown[]
  }[]
}
