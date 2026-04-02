import type { Client } from "$/client"

export class SYNO_Core_CurrentConnection {
  constructor(private client: Client) {}

  get(params?: SYNO_Core_CurrentConnection_get_Params) {
    return this.client.get<SYNO_Core_CurrentConnection_get_Response>("SYNO.Core.CurrentConnection", "get", 1, params)
  }
}

type SYNO_Core_CurrentConnection_get_Response = {
  items: {
    can_be_kicked: boolean
    descr: string
    did: string
    first_login_time: string
    from: string
    is_amfa: boolean
    is_current_connected: boolean
    is_otp_trusted: boolean
    location: string
    pid: number
    protocol: string
    time: string
    type: string
    user_agent: string
    user_can_be_disabled: boolean
    who: string
  }[]
  systime: string
  total: number
}
type SYNO_Core_CurrentConnection_get_Params = {
  start?: number
  limit?: number
  sort_by?: "time"
  sort_direction?: "DESC" | "ASC"
  offset?: number
  action?: "enum"
}
