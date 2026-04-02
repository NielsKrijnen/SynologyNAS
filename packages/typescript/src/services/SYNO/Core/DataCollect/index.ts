import type { Client } from "$/client"
import { SYNO_Core_DataCollect_Application } from "$/services/SYNO/Core/DataCollect/Application"

export class SYNO_Core_DataCollect {
  constructor(private client: Client) {}

  get Application() {
    return new SYNO_Core_DataCollect_Application(this.client)
  }
}
