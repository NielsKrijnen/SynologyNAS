import type { Client } from "$/client"

export class SYNO_Core_Promotion_PreInstall {
  constructor(private client: Client) {}

  get_never_show() {
    return this.client.get<SYNO_Core_Promotion_PreInstall_get_never_show_Response>(
      "SYNO.Core.Promotion.PreInstall",
      "get_never_show",
      1
    )
  }
}

type SYNO_Core_Promotion_PreInstall_get_never_show_Response = { never_show: string }
