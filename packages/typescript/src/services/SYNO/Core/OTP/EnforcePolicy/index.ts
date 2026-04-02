import type { Client } from "$/client"

export class SYNO_Core_OTP_EnforcePolicy {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_OTP_EnforcePolicy_get_Response>("SYNO.Core.OTP.EnforcePolicy", "get", 1)
  }
}

type SYNO_Core_OTP_EnforcePolicy_get_Response = { otp_enforce_option: string }
