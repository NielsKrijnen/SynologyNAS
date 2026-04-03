import type { Client } from "$/client"
import { SYNO_Core_Security_DSM_Embed } from "$/services/SYNO/Core/Security/DSM/Embed"

export class SYNO_Core_Security_DSM {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Security_DSM_get_Response>("SYNO.Core.Security.DSM", "get", 6)
  }

  get Embed() {
    return new SYNO_Core_Security_DSM_Embed(this.client)
  }
}

type SYNO_Core_Security_DSM_get_Response = {
  allow_2fa_device_lost_option: boolean
  allow_stay_signed_in_option: boolean
  allow_trust_device_2fa_option: boolean
  csp_header_option: boolean
  enable_csrf_protection: boolean
  restart_clean_session: boolean
  skip_ip_checking: boolean
  timeout: number
}
