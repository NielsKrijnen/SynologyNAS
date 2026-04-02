import type { Client } from "$/client"

export class SYNO_Core_QuickConnect_Permission {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_QuickConnect_Permission_get_Response>(
      "SYNO.Core.QuickConnect.Permission",
      "get",
      1
    )
  }
}

type SYNO_Core_QuickConnect_Permission_get_Response = { services: { enabled: boolean; id: string }[] }
