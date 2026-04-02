import type { Client } from "$/client"
import { SYNO_Core_ExternalDevice_Storage_eSATA } from "$/services/SYNO/Core/ExternalDevice/Storage/eSATA"
import { SYNO_Core_ExternalDevice_Storage_USB } from "$/services/SYNO/Core/ExternalDevice/Storage/USB"

export class SYNO_Core_ExternalDevice_Storage {
  constructor(private client: Client) {}

  get eSATA() {
    return new SYNO_Core_ExternalDevice_Storage_eSATA(this.client)
  }

  get USB() {
    return new SYNO_Core_ExternalDevice_Storage_USB(this.client)
  }
}
