import type { Client } from "$/client"

export class SYNO_Core_Desktop_Timeout {
  constructor(private client: Client) {}

  async check() {
    await this.client.get("SYNO.Core.Desktop.Timeout", "check", 1)
  }
}
