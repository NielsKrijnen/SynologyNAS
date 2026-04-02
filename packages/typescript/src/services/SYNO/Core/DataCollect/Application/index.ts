import type { Client } from "$/client"

export class SYNO_Core_DataCollect_Application {
  constructor(private client: Client) {}

  async record(params: SYNO_Core_DataCollect_Application_record_Params) {
    await this.client.get("SYNO.Core.DataCollect.Application", "record", 1, params)
  }
}

type SYNO_Core_DataCollect_Application_record_Params = { app: string }
