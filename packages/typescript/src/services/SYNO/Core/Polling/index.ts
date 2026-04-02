import type { Client } from "$/client"
import { SYNO_Core_Polling_Data } from "$/services/SYNO/Core/Polling/Data"

export class SYNO_Core_Polling {
  constructor(private client: Client) {}

  get Data() {
    return new SYNO_Core_Polling_Data(this.client)
  }
}
