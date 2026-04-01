import type { Client } from "$/client"
import { SYNO_Backup_Config } from "$/services/SYNO/Backup/Config"

export class SYNO_Backup {
  constructor(private client: Client) {}

  get Config() {
    return new SYNO_Backup_Config(this.client)
  }
}
