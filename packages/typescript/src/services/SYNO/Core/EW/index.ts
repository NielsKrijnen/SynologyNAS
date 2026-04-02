import type { Client } from "$/client"
import { SYNO_Core_EW_Info } from "$/services/SYNO/Core/EW/Info"

export class SYNO_Core_EW {
  constructor(private client: Client) {}

  get Info() {
    return new SYNO_Core_EW_Info(this.client)
  }
}
