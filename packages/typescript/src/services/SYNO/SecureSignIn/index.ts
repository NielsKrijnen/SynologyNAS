import type { Client } from "$/client"
import { SYNO_SecureSignIn_AMFA } from "$/services/SYNO/SecureSignIn/AMFA"
import { SYNO_SecureSignIn_Method } from "$/services/SYNO/SecureSignIn/Method"
import { SYNO_SecureSignIn_Package } from "$/services/SYNO/SecureSignIn/Package"

export class SYNO_SecureSignIn {
  constructor(private client: Client) {}

  get AMFA() {
    return new SYNO_SecureSignIn_AMFA(this.client)
  }

  get Method() {
    return new SYNO_SecureSignIn_Method(this.client)
  }

  get Package() {
    return new SYNO_SecureSignIn_Package(this.client)
  }
}
