import type { Client } from "$/client"

export class SYNO_ActiveInsight_CompleteCollection {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_ActiveInsight_CompleteCollection_get_Response>(
      "SYNO.ActiveInsight.CompleteCollection",
      "get",
      1
    )
  }
}

type SYNO_ActiveInsight_CompleteCollection_get_Response = { enabled: boolean }
