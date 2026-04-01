import type { Client } from "$/client"

export class SYNO_SecureSignIn_Method {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_SecureSignIn_Method_get_Response>("SYNO.SecureSignIn.Method", "get", 1)
  }
}

type SYNO_SecureSignIn_Method_get_Response = { auth_type: unknown[]; mode: string; status: string; time: number }
