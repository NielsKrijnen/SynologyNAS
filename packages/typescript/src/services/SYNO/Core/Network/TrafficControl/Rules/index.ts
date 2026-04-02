import type { Client } from "$/client"

export class SYNO_Core_Network_TrafficControl_Rules {
  constructor(private client: Client) {}

  load(params: SYNO_Core_Network_TrafficControl_Rules_load_Params) {
    return this.client.get<SYNO_Core_Network_TrafficControl_Rules_load_Response>(
      "SYNO.Core.Network.TrafficControl.Rules",
      "load",
      1,
      params
    )
  }
}

type SYNO_Core_Network_TrafficControl_Rules_load_Response = { rules: unknown[]; total: number }
type SYNO_Core_Network_TrafficControl_Rules_load_Params = { adapter: string }
