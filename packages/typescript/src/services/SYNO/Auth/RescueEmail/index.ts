import type { Client } from "$/client"

export class SYNO_Auth_RescueEmail {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Auth_RescueEmail_get_Response>("SYNO.Auth.RescueEmail", "get", 1)
  }

  async set() {
    await this.client.get("SYNO.Auth.RescueEmail", "set", 1)
  }
}

type SYNO_Auth_RescueEmail_get_Response = { verified: boolean }
