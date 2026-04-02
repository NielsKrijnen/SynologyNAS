import type { Client } from "$/client"

export class SYNO_Core_EW_Info {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_EW_Info_get_Response>("SYNO.Core.EW.Info", "get", 1)
  }
}

type SYNO_Core_EW_Info_get_Response = {
  have_applied_eunit: boolean
  info: { sn: string; status: string }
  mail: string
  show_welcome_page: boolean
}
