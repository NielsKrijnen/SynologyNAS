import type { Client } from "$/client"
import { SYNO_Core_Package_Feed } from "$/services/SYNO/Core/Package/Feed"
import { SYNO_Core_Package_Installation } from "$/services/SYNO/Core/Package/Installation"
import { SYNO_Core_Package_Server } from "$/services/SYNO/Core/Package/Server"
import { SYNO_Core_Package_Setting } from "$/services/SYNO/Core/Package/Setting"

export class SYNO_Core_Package {
  constructor(private client: Client) {}

  list(params?: SYNO_Core_Package_list_Params) {
    return this.client.get<SYNO_Core_Package_list_Response>("SYNO.Core.Package", "list", 2, params)
  }

  async feasibility_check(params: SYNO_Core_Package_feasibility_check_Params) {
    await this.client.get("SYNO.Core.Package", "feasibility_check", 1, params)
  }

  get Feed() {
    return new SYNO_Core_Package_Feed(this.client)
  }

  get Installation() {
    return new SYNO_Core_Package_Installation(this.client)
  }

  get Server() {
    return new SYNO_Core_Package_Server(this.client)
  }

  get Setting() {
    return new SYNO_Core_Package_Setting(this.client)
  }
}

type SYNO_Core_Package_list_Response = {
  packages: {
    additional?: { status_sketch?: string; dsm_apps?: string; install_type?: string }
    id: string
    name: string
    timestamp: number
    version: string
  }[]
  total: number
}
type SYNO_Core_Package_list_Params = {
  additional?: ("status_sketch" | "dsm_apps" | "install_type")[]
  ignore_hidden?: boolean
}
type SYNO_Core_Package_feasibility_check_Params = { type: "install_check"; packages: string[] }
