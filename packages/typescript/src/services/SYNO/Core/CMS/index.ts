import type { Client } from "$/client"
import { SYNO_Core_CMS_Info } from "$/services/SYNO/Core/CMS/Info"

export class SYNO_Core_CMS {
  constructor(private client: Client) {}

  get Info() {
    return new SYNO_Core_CMS_Info(this.client)
  }
}
