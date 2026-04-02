import type { Client } from "$/client"

export class SYNO_Core_CMS_Info {
  constructor(private client: Client) {}

  get(params?: SYNO_Core_CMS_Info_get_Params) {
    return this.client.get<SYNO_Core_CMS_Info_get_Response>("SYNO.Core.CMS.Info", "get", 1, params)
  }
}

type SYNO_Core_CMS_Info_get_Response = { joined: boolean; additional?: { gluster_role?: number } }
type SYNO_Core_CMS_Info_get_Params = { additional?: "gluster_role"[] }
