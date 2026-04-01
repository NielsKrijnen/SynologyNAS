import type { Client } from "$/client"

export class SYNO_SecureSignIn_Package {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_SecureSignIn_Package_get_Response>("SYNO.SecureSignIn.Package", "get", 1)
  }
}

type SYNO_SecureSignIn_Package_get_Response = { account_status: boolean; enabled: boolean }
