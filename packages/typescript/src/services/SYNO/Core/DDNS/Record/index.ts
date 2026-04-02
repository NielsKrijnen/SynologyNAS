import type { Client } from "$/client"

export class SYNO_Core_DDNS_Record {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_DDNS_Record_list_Response>("SYNO.Core.DDNS.Record", "list", 1)
  }
}

type SYNO_Core_DDNS_Record_list_Response = { next_update_time: string; records: unknown[] }
