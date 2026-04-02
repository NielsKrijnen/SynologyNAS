import type { Client } from "$/client"

export class SYNO_Core_NormalUser_LoginNotify {
  constructor(private client: Client) {}

  check() {
    return this.client.get<SYNO_Core_NormalUser_LoginNotify_check_Response>(
      "SYNO.Core.NormalUser.LoginNotify",
      "check",
      1
    )
  }
}

type SYNO_Core_NormalUser_LoginNotify_check_Response = { need_notify: boolean }
