import type { Client } from "$/client"

export class SYNO_Entry_Request {
  constructor(private client: Client) {}

  request(params: SYNO_Entry_Request_request_Params) {
    return this.client.get("SYNO.Entry.Request", "request", 1, params)
  }
}

type SYNO_Entry_Request_request_Params = {
  stop_when_error: boolean
  mode: "sequential"
  compound: ({ api: string; method: string; version: number } & Record<string, string | number | boolean>)[]
}
