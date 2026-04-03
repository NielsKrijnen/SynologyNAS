import type { Client } from "$/client"

export class SYNO_Core_SecurityScan_Conf {
  constructor(private client: Client) {}

  time_get() {
    return this.client.get<SYNO_Core_SecurityScan_Conf_time_get_Response>("SYNO.Core.SecurityScan.Conf", "time_get", 1)
  }

  first_get() {
    return this.client.get<SYNO_Core_SecurityScan_Conf_first_get_Response>(
      "SYNO.Core.SecurityScan.Conf",
      "first_get",
      1
    )
  }
}

type SYNO_Core_SecurityScan_Conf_time_get_Response = { curTime: number; success: boolean }
type SYNO_Core_SecurityScan_Conf_first_get_Response = {
  firstLogAnalyzer: boolean
  firstScan: boolean
  iscrack: boolean
  success: boolean
}
