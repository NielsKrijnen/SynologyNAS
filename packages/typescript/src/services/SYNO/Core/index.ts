import type { Client } from "$/client"
import { SYNO_Core_AppNotify } from "$/services/SYNO/Core/AppNotify"
import { SYNO_Core_AppPortal } from "$/services/SYNO/Core/AppPortal"
import { SYNO_Core_BackgroundTask } from "$/services/SYNO/Core/BackgroundTask"
import { SYNO_Core_Certificate } from "$/services/SYNO/Core/Certificate"
import { SYNO_Core_CMS } from "$/services/SYNO/Core/CMS"
import { SYNO_Core_CurrentConnection } from "$/services/SYNO/Core/CurrentConnection"
import { SYNO_Core_DataCollect } from "$/services/SYNO/Core/DataCollect"
import { SYNO_Core_DDNS } from "$/services/SYNO/Core/DDNS"
import { SYNO_Core_Desktop } from "$/services/SYNO/Core/Desktop"
import { SYNO_Core_DisableAdmin } from "$/services/SYNO/Core/DisableAdmin"
import { SYNO_Core_DSMNotify } from "$/services/SYNO/Core/DSMNotify"
import { SYNO_Core_EW } from "$/services/SYNO/Core/EW"
import { SYNO_Core_ExternalDevice } from "$/services/SYNO/Core/ExternalDevice"
import { SYNO_Core_FileServ } from "$/services/SYNO/Core/FileServ"
import { SYNO_Core_Hardware } from "$/services/SYNO/Core/Hardware"
import { SYNO_Core_MyDSCenter } from "$/services/SYNO/Core/MyDSCenter"
import { SYNO_Core_Network } from "$/services/SYNO/Core/Network"
import { SYNO_Core_NormalUser } from "$/services/SYNO/Core/NormalUser"
import { SYNO_Core_Notification } from "$/services/SYNO/Core/Notification"
import { SYNO_Core_OTP } from "$/services/SYNO/Core/OTP"
import { SYNO_Core_Package } from "$/services/SYNO/Core/Package"
import { SYNO_Core_PersonalSettings } from "$/services/SYNO/Core/PersonalSettings"
import { SYNO_Core_Polling } from "$/services/SYNO/Core/Polling"
import { SYNO_Core_Promotion } from "$/services/SYNO/Core/Promotion"
import { SYNO_Core_QuickConnect } from "$/services/SYNO/Core/QuickConnect"
import { SYNO_Core_QuickStart } from "$/services/SYNO/Core/QuickStart"
import { SYNO_Core_Security } from "$/services/SYNO/Core/Security"
import { SYNO_Core_SecurityScan } from "$/services/SYNO/Core/SecurityScan"
import { SYNO_Core_SNMP } from "$/services/SYNO/Core/SNMP"

export class SYNO_Core {
  constructor(private client: Client) {}

  get AppNotify() {
    return new SYNO_Core_AppNotify(this.client)
  }

  get AppPortal() {
    return new SYNO_Core_AppPortal(this.client)
  }

  get BackgroundTask() {
    return new SYNO_Core_BackgroundTask(this.client)
  }

  get Certificate() {
    return new SYNO_Core_Certificate(this.client)
  }

  get CMS() {
    return new SYNO_Core_CMS(this.client)
  }

  get CurrentConnection() {
    return new SYNO_Core_CurrentConnection(this.client)
  }

  get DataCollect() {
    return new SYNO_Core_DataCollect(this.client)
  }

  get DDNS() {
    return new SYNO_Core_DDNS(this.client)
  }

  get Desktop() {
    return new SYNO_Core_Desktop(this.client)
  }

  get DisableAdmin() {
    return new SYNO_Core_DisableAdmin(this.client)
  }

  get DSMNotify() {
    return new SYNO_Core_DSMNotify(this.client)
  }

  get EW() {
    return new SYNO_Core_EW(this.client)
  }

  get ExternalDevice() {
    return new SYNO_Core_ExternalDevice(this.client)
  }

  get FileServ() {
    return new SYNO_Core_FileServ(this.client)
  }

  get Hardware() {
    return new SYNO_Core_Hardware(this.client)
  }

  get MyDSCenter() {
    return new SYNO_Core_MyDSCenter(this.client)
  }

  get Network() {
    return new SYNO_Core_Network(this.client)
  }

  get NormalUser() {
    return new SYNO_Core_NormalUser(this.client)
  }

  get Notification() {
    return new SYNO_Core_Notification(this.client)
  }

  get OTP() {
    return new SYNO_Core_OTP(this.client)
  }

  get Package() {
    return new SYNO_Core_Package(this.client)
  }

  get PersonalSettings() {
    return new SYNO_Core_PersonalSettings(this.client)
  }

  get Polling() {
    return new SYNO_Core_Polling(this.client)
  }

  get Promotion() {
    return new SYNO_Core_Promotion(this.client)
  }

  get QuickConnect() {
    return new SYNO_Core_QuickConnect(this.client)
  }

  get QuickStart() {
    return new SYNO_Core_QuickStart(this.client)
  }

  get Security() {
    return new SYNO_Core_Security(this.client)
  }

  get SecurityScan() {
    return new SYNO_Core_SecurityScan(this.client)
  }

  get SNMP() {
    return new SYNO_Core_SNMP(this.client)
  }
}
