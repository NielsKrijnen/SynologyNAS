import type { Client } from "$/client"

export class SYNO_Core_AppPortal_ReverseProxy {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_AppPortal_ReverseProxy_list_Response>(
      "SYNO.Core.AppPortal.ReverseProxy",
      "list",
      1
    )
  }
}

type SYNO_Core_AppPortal_ReverseProxy_list_Response = { entries: unknown[] }
