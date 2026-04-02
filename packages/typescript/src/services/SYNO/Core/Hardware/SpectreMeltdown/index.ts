import type { Client } from "$/client"

export class SYNO_Core_Hardware_SpectreMeltdown {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Hardware_SpectreMeltdown_get_Response>(
      "SYNO.Core.Hardware.SpectreMeltdown",
      "get",
      1
    )
  }
}

type SYNO_Core_Hardware_SpectreMeltdown_get_Response = { enable_spectre_meltdown_mitigation: boolean }
