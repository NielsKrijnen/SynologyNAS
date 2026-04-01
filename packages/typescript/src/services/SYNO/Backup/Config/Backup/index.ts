import type { Client } from "$/client"

export class SYNO_Backup_Config_Backup {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Backup_Config_Backup_list_Response>("SYNO.Backup.Config.Backup", "list", 1)
  }

  start() {
    return this.client.get<SYNO_Backup_Config_Backup_start_Response>("SYNO.Backup.Config.Backup", "start", 1)
  }

  status(params: SYNO_Backup_Config_Backup_status_Params) {
    return this.client.get<SYNO_Backup_Config_Backup_status_Response>("SYNO.Backup.Config.Backup", "status", 1, params)
  }
}

type SYNO_Backup_Config_Backup_list_Response = { services: { field: string; id: string; text: string }[] }
type SYNO_Backup_Config_Backup_start_Response = { task_id: string }
type SYNO_Backup_Config_Backup_status_Response = { finish: boolean; task_id: string }
type SYNO_Backup_Config_Backup_status_Params = { task_id: string }
