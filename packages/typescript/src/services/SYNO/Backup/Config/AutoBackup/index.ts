import type { Client } from "$/client"

export class SYNO_Backup_Config_AutoBackup {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Backup_Config_AutoBackup_get_Response>("SYNO.Backup.Config.AutoBackup", "get", 1)
  }

  status() {
    return this.client.get<SYNO_Backup_Config_AutoBackup_status_Response>("SYNO.Backup.Config.AutoBackup", "status", 1)
  }
}

type SYNO_Backup_Config_AutoBackup_get_Response = {
  enable: boolean
  enc_method: string
  last_status: string
  myds_account: string
  pwd: string
}
type SYNO_Backup_Config_AutoBackup_status_Response = { last_status: string }
