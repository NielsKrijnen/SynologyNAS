import type { Client } from "$/client"
import { SYNO_Core_Notification_Advance_FilterSettings_Profile } from "$/services/SYNO/Core/Notification/Advance/FilterSettings/Profile"
import { SYNO_Core_Notification_Advance_FilterSettings_Template } from "$/services/SYNO/Core/Notification/Advance/FilterSettings/Template"

export class SYNO_Core_Notification_Advance_FilterSettings {
  constructor(private client: Client) {}

  get Profile() {
    return new SYNO_Core_Notification_Advance_FilterSettings_Profile(this.client)
  }

  get Template() {
    return new SYNO_Core_Notification_Advance_FilterSettings_Template(this.client)
  }
}
