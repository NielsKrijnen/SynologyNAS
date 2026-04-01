import type { Client } from "$/client"
import { SYNO_ActiveInsight } from "$/services/SYNO/ActiveInsight"
import { SYNO_API } from "$/services/SYNO/API"
import { SYNO_Auth } from "$/services/SYNO/Auth"
import { SYNO_Backup } from "$/services/SYNO/Backup"
import { SYNO_CloudSync } from "$/services/SYNO/CloudSync"
import { SYNO_Entry } from "$/services/SYNO/Entry"
import { SYNO_FileStation } from "$/services/SYNO/FileStation"
import { SYNO_Finder } from "$/services/SYNO/Finder"

export class SYNO {
  constructor(private client: Client) {}

  get API() {
    return new SYNO_API(this.client)
  }

  get ActiveInsight() {
    return new SYNO_ActiveInsight(this.client)
  }

  get Auth() {
    return new SYNO_Auth(this.client)
  }

  get Backup() {
    return new SYNO_Backup(this.client)
  }

  get CloudSync() {
    return new SYNO_CloudSync(this.client)
  }

  get Entry() {
    return new SYNO_Entry(this.client)
  }

  get FileStation() {
    return new SYNO_FileStation(this.client)
  }

  get Finder() {
    return new SYNO_Finder(this.client)
  }
}
