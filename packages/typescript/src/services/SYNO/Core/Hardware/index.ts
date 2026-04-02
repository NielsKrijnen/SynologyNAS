import type { Client } from "$/client"
import { SYNO_Core_Hardware_FanSpeed } from "$/services/SYNO/Core/Hardware/FanSpeed"
import { SYNO_Core_Hardware_SpectreMeltdown } from "$/services/SYNO/Core/Hardware/SpectreMeltdown"

export class SYNO_Core_Hardware {
  constructor(private client: Client) {}

  get FanSpeed() {
    return new SYNO_Core_Hardware_FanSpeed(this.client)
  }

  get SpectreMeltdown() {
    return new SYNO_Core_Hardware_SpectreMeltdown(this.client)
  }
}
