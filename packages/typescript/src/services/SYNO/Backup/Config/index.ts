import type { Client } from "$/client"
import { SYNO_Backup_Config_AutoBackup } from "$/services/SYNO/Backup/Config/AutoBackup"
import { SYNO_Backup_Config_Backup } from "$/services/SYNO/Backup/Config/Backup"

export class SYNO_Backup_Config {
  constructor(private client: Client) {}

  get AutoBackup() {
    return new SYNO_Backup_Config_AutoBackup(this.client)
  }

  get Backup() {
    return new SYNO_Backup_Config_Backup(this.client)
  }
}
