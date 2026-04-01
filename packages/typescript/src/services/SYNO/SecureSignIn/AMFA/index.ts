import type { Client } from "$/client"
import { SYNO_SecureSignIn_AMFA_Policy } from "$/services/SYNO/SecureSignIn/AMFA/Policy"

export class SYNO_SecureSignIn_AMFA {
  constructor(private client: Client) {}

  get Policy() {
    return new SYNO_SecureSignIn_AMFA_Policy(this.client)
  }
}
