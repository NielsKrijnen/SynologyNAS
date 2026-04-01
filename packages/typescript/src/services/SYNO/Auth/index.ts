import type { Client } from "$/client"
import { SYNO_Auth_RescueEmail } from "$/services/SYNO/Auth/RescueEmail"

export class SYNO_Auth {
  constructor(private client: Client) {}

  get RescueEmail() {
    return new SYNO_Auth_RescueEmail(this.client)
  }
}
