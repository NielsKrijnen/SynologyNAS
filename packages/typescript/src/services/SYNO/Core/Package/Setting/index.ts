import type { Client } from "$/client"

export class SYNO_Core_Package_Setting {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Package_Setting_get_Response>("SYNO.Core.Package.Setting", "get", 1)
  }

  set(params?: SYNO_Core_Package_Setting_set_Params) {
    return this.client.get<SYNO_Core_Package_Setting_set_Response>("SYNO.Core.Package.Setting", "set", 1, params)
  }
}

type SYNO_Core_Package_Setting_get_Response = {
  autoupdateall: boolean
  autoupdateimportant: boolean
  enable_autoupdate: boolean
  enable_dsm: boolean
  enable_email: boolean
  mailset: boolean
  show_disable_autoupdate: boolean
  trust_level: number
  update_channel: boolean
  volume_count: number
  volume_list: {
    desc: string
    display: string
    mount_point: string
    size_free: string
    size_total: string
    vol_desc: string
    volume_features: unknown[]
  }[]
  volume_status: string
}
type SYNO_Core_Package_Setting_set_Response = {
  enable_dsm: boolean
  enable_email: boolean
  update_channel: "stable" | "beta"
}
type SYNO_Core_Package_Setting_set_Params = {
  update_channel: "stable" | "beta"
  enable_email: boolean
  enable_dsm: boolean
  enable_autoupdate: boolean
  autoupdateall: boolean
  autoupdateimportant: boolean
}
