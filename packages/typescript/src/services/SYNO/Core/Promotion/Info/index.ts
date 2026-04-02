import type { Client } from "$/client"

export class SYNO_Core_Promotion_Info {
  constructor(private client: Client) {}

  is_2FA_enabled() {
    return this.client.get<SYNO_Core_Promotion_Info_is_2FA_enabled_Response>(
      "SYNO.Core.Promotion.Info",
      "is_2FA_enabled",
      1
    )
  }
}

type SYNO_Core_Promotion_Info_is_2FA_enabled_Response = number
