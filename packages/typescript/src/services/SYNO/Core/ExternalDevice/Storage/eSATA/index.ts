import type { Client } from "$/client"

export class SYNO_Core_ExternalDevice_Storage_eSATA {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_ExternalDevice_Storage_eSATA_list_Response>(
      "SYNO.Core.ExternalDevice.Storage.eSATA",
      "list",
      1
    )
  }
}

type SYNO_Core_ExternalDevice_Storage_eSATA_list_Response = { devices: unknown[] }
