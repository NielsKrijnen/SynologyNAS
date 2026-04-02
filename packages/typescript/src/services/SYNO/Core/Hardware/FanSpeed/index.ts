import type { Client } from "$/client"

export class SYNO_Core_Hardware_FanSpeed {
  constructor(private client: Client) {}

  get() {
    return this.client.get("SYNO.Core.Hardware.FanSpeed", "get", 1)
  }
}
