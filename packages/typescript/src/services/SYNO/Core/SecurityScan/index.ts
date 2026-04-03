import type { Client } from "$/client"
import { SYNO_Core_SecurityScan_Conf } from "$/services/SYNO/Core/SecurityScan/Conf"
import { SYNO_Core_SecurityScan_Operation } from "$/services/SYNO/Core/SecurityScan/Operation"
import { SYNO_Core_SecurityScan_Status } from "$/services/SYNO/Core/SecurityScan/Status"

export class SYNO_Core_SecurityScan {
  constructor(private client: Client) {}

  get Conf() {
    return new SYNO_Core_SecurityScan_Conf(this.client)
  }

  get Operation() {
    return new SYNO_Core_SecurityScan_Operation(this.client)
  }

  get Status() {
    return new SYNO_Core_SecurityScan_Status(this.client)
  }
}
