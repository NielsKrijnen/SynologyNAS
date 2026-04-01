import type { Client } from "$/client"

export class SYNO_SecureSignIn_AMFA_Policy {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_SecureSignIn_AMFA_Policy_get_Response>("SYNO.SecureSignIn.AMFA.Policy", "get", 1)
  }
}

type SYNO_SecureSignIn_AMFA_Policy_get_Response = { type: string; group_list: string; user_list: string }
