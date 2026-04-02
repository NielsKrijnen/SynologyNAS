import type { Client } from "$/client"
import { SYNO_Core_OTP_EnforcePolicy } from "$/services/SYNO/Core/OTP/EnforcePolicy"

export class SYNO_Core_OTP {
  constructor(private client: Client) {}

  get_one() {
    return this.client.get<SYNO_Core_OTP_get_one_Response>("SYNO.Core.OTP", "get_one", 2)
  }

  get_qrcode(params: SYNO_Core_OTP_get_qrcode_Params) {
    return this.client.get<SYNO_Core_OTP_get_qrcode_Response>("SYNO.Core.OTP", "get_qrcode", 3, params)
  }

  get EnforcePolicy() {
    return new SYNO_Core_OTP_EnforcePolicy(this.client)
  }
}

type SYNO_Core_OTP_get_one_Response = { otp_set: boolean }
type SYNO_Core_OTP_get_qrcode_Response = { appAccount: string; img: string; key: string }
type SYNO_Core_OTP_get_qrcode_Params = { enable_margin?: boolean; account: string }
