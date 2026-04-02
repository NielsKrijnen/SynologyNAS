import type { Client } from "$/client"
import { SYNO_Core_Notification_Advance_FilterSettings } from "$/services/SYNO/Core/Notification/Advance/FilterSettings"

export class SYNO_Core_Notification_Advance {
  constructor(private client: Client) {}

  get FilterSettings() {
    return new SYNO_Core_Notification_Advance_FilterSettings(this.client)
  }
}
