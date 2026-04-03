import type { Client } from "$/client"

export class SYNO_Core_SecurityScan_Operation {
  constructor(private client: Client) {}

  update() {
    return this.client.get<SYNO_Core_SecurityScan_Operation_update_Response>(
      "SYNO.Core.SecurityScan.Operation",
      "update",
      1
    )
  }

  start(params: SYNO_Core_SecurityScan_Operation_start_Params) {
    return this.client.get<SYNO_Core_SecurityScan_Operation_start_Response>(
      "SYNO.Core.SecurityScan.Operation",
      "start",
      1,
      params
    )
  }
}

type SYNO_Core_SecurityScan_Operation_update_Response = {
  lang: { rule: Record<string, string>; rules: Record<string, string> }
  success: boolean
}
type SYNO_Core_SecurityScan_Operation_start_Response = { success: boolean }
type SYNO_Core_SecurityScan_Operation_start_Params = { items: "ALL" }
