import type { Client } from "$/client"

export class SYNO_API_Auth_Type {
  constructor(private client: Client) {}

  get(params?: SYNO_API_Auth_Type_get_Params) {
    return this.client.get<SYNO_API_Auth_Type_get_Response>("SYNO.API.Auth.Type", "get", 1, params)
  }
}

type SYNO_API_Auth_Type_get_Response = { type: string }[]
type SYNO_API_Auth_Type_get_Params = { account?: string }
