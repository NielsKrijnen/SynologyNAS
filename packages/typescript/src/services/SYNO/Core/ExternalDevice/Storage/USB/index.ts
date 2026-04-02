import type { Client } from "$/client"

export class SYNO_Core_ExternalDevice_Storage_USB {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_ExternalDevice_Storage_USB_list_Response>(
      "SYNO.Core.ExternalDevice.Storage.USB",
      "list",
      1
    )
  }
}

type SYNO_Core_ExternalDevice_Storage_USB_list_Response = { devices: unknown[] }
