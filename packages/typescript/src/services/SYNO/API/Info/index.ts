import type { Client } from "$/client"

export class SYNO_API_Info {
  constructor(private client: Client) {}

  query(params?: SYNO_API_Info_query_Params) {
    return this.client.get<SYNO_API_Info_query_Response>("SYNO.API.Info", "query", 1, params)
  }
}

type SYNO_API_Info_query_Response = Record<
  string,
  { path: string; minVersion: number; maxVersion: number; requestFormat: string }
>
type SYNO_API_Info_query_Params = { query?: string }
