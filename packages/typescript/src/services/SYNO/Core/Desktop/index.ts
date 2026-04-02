import type { Client } from "$/client"
import { SYNO_Core_Desktop_PersonalUpdater } from "$/services/SYNO/Core/Desktop/PersonalUpdater"
import { SYNO_Core_Desktop_Timeout } from "$/services/SYNO/Core/Desktop/Timeout"

export class SYNO_Core_Desktop {
  constructor(private client: Client) {}

  get PersonalUpdater() {
    return new SYNO_Core_Desktop_PersonalUpdater(this.client)
  }

  get Timeout() {
    return new SYNO_Core_Desktop_Timeout(this.client)
  }
}
