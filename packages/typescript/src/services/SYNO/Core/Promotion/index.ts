import type { Client } from "$/client"
import { SYNO_Core_Promotion_Info } from "$/services/SYNO/Core/Promotion/Info"
import { SYNO_Core_Promotion_PreInstall } from "$/services/SYNO/Core/Promotion/PreInstall"

export class SYNO_Core_Promotion {
  constructor(private client: Client) {}

  get Info() {
    return new SYNO_Core_Promotion_Info(this.client)
  }

  get PreInstall() {
    return new SYNO_Core_Promotion_PreInstall(this.client)
  }
}
