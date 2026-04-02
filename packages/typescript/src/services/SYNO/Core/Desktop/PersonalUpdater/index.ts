import type { Client } from "$/client"

export class SYNO_Core_Desktop_PersonalUpdater {
  constructor(private client: Client) {}

  need_update() {
    return this.client.get<SYNO_Core_Desktop_PersonalUpdater_need_update_Response>(
      "SYNO.Core.Desktop.PersonalUpdater",
      "need_update",
      1
    )
  }
}

type SYNO_Core_Desktop_PersonalUpdater_need_update_Response = { need_update: boolean }
