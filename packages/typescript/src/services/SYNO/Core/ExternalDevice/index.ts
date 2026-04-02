import type { Client } from "$/client"
import { SYNO_Core_ExternalDevice_Storage } from "$/services/SYNO/Core/ExternalDevice/Storage"

export class SYNO_Core_ExternalDevice {
  constructor(private client: Client) {}

  get Storage() {
    return new SYNO_Core_ExternalDevice_Storage(this.client)
  }
}
