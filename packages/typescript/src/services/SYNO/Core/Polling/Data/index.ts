import type { Client } from "$/client"

export class SYNO_Core_Polling_Data {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Polling_Data_get_Response>("SYNO.Core.Polling.Data", "get", 1)
  }
}

type SYNO_Core_Polling_Data_get_Response = { diskList: unknown[] }
