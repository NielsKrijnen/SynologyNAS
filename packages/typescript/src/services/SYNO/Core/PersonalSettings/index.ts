import type { Client } from "$/client"

export class SYNO_Core_PersonalSettings {
  constructor(private client: Client) {}

  quota(params?: SYNO_Core_PersonalSettings_quota_Params) {
    return this.client.get<SYNO_Core_PersonalSettings_quota_Response>("SYNO.Core.PersonalSettings", "quota", 1, params)
  }
}

type SYNO_Core_PersonalSettings_quota_Response = {
  items: {
    children: {
      expanded: boolean
      leaf: boolean
      name: string
      quota: string | number
      share_quota: string | number
      share_used: string | number
      used: string | number
    }[]
    expanded: boolean
    leaf: boolean
    name: string
    quota: string | number
    share_quota: string | number
    share_used: string | number
    used: string | number
  }[]
  total: number
}
type SYNO_Core_PersonalSettings_quota_Params = { start?: number; offset?: number; limit?: number }
