import type { Client } from "$/client"

export class SYNO_Core_BackgroundTask {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_BackgroundTask_get_Response>("SYNO.Core.BackgroundTask", "get", 1)
  }
}

type SYNO_Core_BackgroundTask_get_Response = {
  task_conf_time: { nsec: number; sec: number }
  task_data_time: { nsec: number; sec: number }
  task_groups: Record<
    string,
    {
      belong_tray: string
      custom_tray_tooltip: string
      enable_tray_tooltip: boolean
      functions: Record<
        string,
        {
          action_privileges: string[]
          allow_users: unknown[]
          application_privileges: unknown[]
          i18n: string
          read_only_config: boolean
          system_slice: string
          tasks: Record<string, unknown>
          ui_component: string
        }
      >
      i18n: string
      icon_class: string
      icon_path: string
      is_tray: boolean
      read_only_config: boolean
      tray_groups: unknown[]
      tray_icon_class: string
    }
  >
}
