import type { Client } from "$/client"

export class SYNO_Core_SecurityScan_Status {
  constructor(private client: Client) {}

  rule_get(params: SYNO_Core_SecurityScan_Status_rule_get_Params) {
    return this.client.get<SYNO_Core_SecurityScan_Status_rule_get_Response>(
      "SYNO.Core.SecurityScan.Status",
      "rule_get",
      1,
      params
    )
  }

  system_get() {
    return this.client.get<SYNO_Core_SecurityScan_Status_system_get_Response>(
      "SYNO.Core.SecurityScan.Status",
      "system_get",
      1
    )
  }
}

type SYNO_Core_SecurityScan_Status_rule_get_Response = {
  isUpdating: boolean
  items: Record<
    string,
    {
      action: string
      category: string
      id: string
      method: string
      severity: string
      status: string
      strId: string
      update: string
    }
  >
  success: boolean
}
type SYNO_Core_SecurityScan_Status_rule_get_Params = { items: "ALL" }
type SYNO_Core_SecurityScan_Status_system_get_Response = {
  items: {
    malware: {
      category: string
      fail: { danger: number; info: number; outOfDate: number; risk: number; warning: number }
      failSeverity: string
      progress: number
      runningItem: string
      total: number
      waitNum: number
    }
    network: {
      category: string
      fail: { danger: number; info: number; outOfDate: number; risk: number; warning: number }
      failSeverity: string
      progress: number
      runningItem: string
      total: number
      waitNum: number
    }
    systemCheck: {
      category: string
      fail: { danger: number; info: number; outOfDate: number; risk: number; warning: number }
      failSeverity: string
      progress: number
      runningItem: string
      total: number
      waitNum: number
    }
    update: {
      category: string
      fail: { danger: number; info: number; outOfDate: number; risk: number; warning: number }
      failSeverity: string
      progress: number
      runningItem: string
      total: number
      waitNum: number
    }
    userInfo: {
      category: string
      fail: { danger: number; info: number; outOfDate: number; risk: number; warning: number }
      failSeverity: string
      progress: number
      runningItem: string
      total: number
      waitNum: number
    }
  }
  lastScanTime: string
  startTime: string
  success: boolean
  sysProgress: number
  sysStatus: string
}
