import type { Client } from "$/client"
import { SYNO_Core_AppPortal_AccessControl } from "$/services/SYNO/Core/AppPortal/AccessControl"
import { SYNO_Core_AppPortal_Config } from "$/services/SYNO/Core/AppPortal/Config"

export class SYNO_Core_AppPortal {
  constructor(private client: Client) {}

  list(params?: SYNO_Core_AppPortal_list_Params) {
    return this.client.get<SYNO_Core_AppPortal_list_Response>("SYNO.Core.AppPortal", "list", 2, params)
  }

  get AccessControl() {
    return new SYNO_Core_AppPortal_AccessControl(this.client)
  }

  get Config() {
    return new SYNO_Core_AppPortal_Config(this.client)
  }
}

type SYNO_Core_AppPortal_list_Response = {
  portal: {
    additional?: {
      default_setting?: { alias: string; fqdn: string; hsts: boolean; http_port: number; https_port: number }
    }
    display_name: string
    enable_redirect: boolean
    id: string
  }[]
}
type SYNO_Core_AppPortal_list_Params = { additional?: "default_setting"[] }
