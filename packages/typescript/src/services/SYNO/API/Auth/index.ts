import type { Client } from "$/client"
import { SYNO_API_Auth_Type } from "$/services/SYNO/API/Auth/Type"
import { SYNO_API_Auth_UIConfig } from "$/services/SYNO/API/Auth/UIConfig"

export class SYNO_API_Auth {
  constructor(private client: Client) {}

  async login(params: SYNO_API_Auth_login_Params) {
    const response = await this.client.get<SYNO_API_Auth_login_Response>("SYNO.API.Auth", "login", 7, {
      format: "cookie",
      enable_syno_token: "yes",
      ...params
    })

    this.client.setSession(response.sid, response.synotoken)

    return response
  }

  async logout() {
    await this.client.get("SYNO.API.Auth", "logout", 1)

    this.client.setSession(null, null)
  }

  get Type() {
    return new SYNO_API_Auth_Type(this.client)
  }

  get UIConfig() {
    return new SYNO_API_Auth_UIConfig(this.client)
  }
}

type SYNO_API_Auth_login_Response = {
  account: string
  device_id: string
  sid: string
  is_portal_port: boolean
  synotoken: string
}
type SYNO_API_Auth_login_Params = { account: string; passwd: string; otp_code?: string }
