import type { Client } from "$/client"

export class SYNO_Core_Security_AutoBlock {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Security_AutoBlock_get_Response>("SYNO.Core.Security.AutoBlock", "get", 1)
  }
}

type SYNO_Core_Security_AutoBlock_get_Response = {
  attempts: number
  enable: boolean
  expire_day: number
  within_mins: number
}
