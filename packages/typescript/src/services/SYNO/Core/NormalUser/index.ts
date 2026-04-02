import type { Client } from "$/client"
import { SYNO_Core_NormalUser_LoginNotify } from "$/services/SYNO/Core/NormalUser/LoginNotify"

export class SYNO_Core_NormalUser {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_NormalUser_get_Response>("SYNO.Core.NormalUser", "get", 1)
  }

  async set() {
    await this.client.get("SYNO.Core.NormalUser", "set", 2)
  }

  get LoginNotify() {
    return new SYNO_Core_NormalUser_LoginNotify(this.client)
  }
}

type SYNO_Core_NormalUser_get_Response = {
  OTP_response: boolean
  OTP_enforced: boolean
  disallowchpasswd: boolean
  editable: boolean
  email: string
  fullname: string
  password_last_change: number
  username: string
}
