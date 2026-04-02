import type { Client } from "$/client"
import { SYNO_Core_QuickStart_Info } from "$/services/SYNO/Core/QuickStart/Info"

export class SYNO_Core_QuickStart {
  constructor(private client: Client) {}

  get Info() {
    return new SYNO_Core_QuickStart_Info(this.client)
  }
}
