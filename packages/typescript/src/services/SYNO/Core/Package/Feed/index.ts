import type { Client } from "$/client"

export class SYNO_Core_Package_Feed {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Package_Feed_list_Response>("SYNO.Core.Package.Feed", "list", 1)
  }
}

type SYNO_Core_Package_Feed_list_Response = { items: unknown[]; total: number }
