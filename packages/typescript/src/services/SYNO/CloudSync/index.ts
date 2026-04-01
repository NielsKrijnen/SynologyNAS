import type { Client } from "$/client"

export class SYNO_CloudSync {
  constructor(private client: Client) {}

  list_conn(params?: SYNO_CloudSync_list_conn_Params) {
    return this.client.get<SYNO_CloudSync_list_conn_Response>("SYNO.CloudSync", "list_conn", 1, params)
  }

  get_available_clouds() {
    return this.client.get<SYNO_CloudSync_get_available_clouds_Response>("SYNO.CloudSync", "get_available_clouds", 1)
  }

  get_config() {
    return this.client.get<SYNO_CloudSync_get_config_Response>("SYNO.CloudSync", "get_config", 1)
  }
}

type SYNO_CloudSync_list_conn_Response = {
  conn: unknown[]
  is_admin_mode: boolean
  is_pause: boolean
  notification: { file_count: number } | null
  total: number
  tray_status: "suspended"
}
type SYNO_CloudSync_list_conn_Params = { is_tray?: boolean; group_by?: "group_by_user" }
type SYNO_CloudSync_get_available_clouds_Response = { available_clouds: unknown[] }
type SYNO_CloudSync_get_config_Response = {
  admin_mode: "enable"
  log_count: number
  repo_vol_path: string
  sync_mode: boolean
  volume_count: number
  volume_list: {
    desc: string
    display: string
    mount_point: string
    size_free: string
    size_total: string
    value: string
    vol_desc: string
  }[]
  worker_count: number
}
