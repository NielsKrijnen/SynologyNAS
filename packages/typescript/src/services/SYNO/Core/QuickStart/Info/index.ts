import type { Client } from "$/client"

export class SYNO_Core_QuickStart_Info {
  constructor(private client: Client) {}

  load_ds_info() {
    return this.client.get<SYNO_Core_QuickStart_Info_load_ds_info_Response>(
      "SYNO.Core.QuickStart.Info",
      "load_ds_info",
      3
    )
  }
}

type SYNO_Core_QuickStart_Info_load_ds_info_Response = {
  admin_configured: boolean
  ew20_website_url: string
  first_admin_login: boolean
  privacy_agreement: string
  promote_ew: boolean
  udc_check_state: string
  udc_enabled: string
  welcome_hide: boolean
  welcome_upgrade_step: boolean
}
