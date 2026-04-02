import type { Client } from "$/client"

export class SYNO_Core_MyDSCenter {
  constructor(private client: Client) {}

  query() {
    return this.client.get<SYNO_Core_MyDSCenter_query_Response>("SYNO.Core.MyDSCenter", "query", 2)
  }
}

type SYNO_Core_MyDSCenter_query_Response = { is_logged_in: boolean }
