import type { Client } from "$/client"

export class SYNO_Core_AppPortal_AccessControl {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_AppPortal_AccessControl_list_Response>(
      "SYNO.Core.AppPortal.AccessControl",
      "list",
      1
    )
  }
}

type SYNO_Core_AppPortal_AccessControl_list_Response = { entries: unknown[] }
