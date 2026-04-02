import type { Client } from "$/client"
import { SYNO_Core_Certificate_CRT } from "$/services/SYNO/Core/Certificate/CRT"

export class SYNO_Core_Certificate {
  constructor(private client: Client) {}

  get CRT() {
    return new SYNO_Core_Certificate_CRT(this.client)
  }
}
