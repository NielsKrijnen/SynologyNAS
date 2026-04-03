import type { Client } from "$/client"
import { SYNO_Core_Security_AutoBlock } from "$/services/SYNO/Core/Security/AutoBlock"
import { SYNO_Core_Security_DoS } from "$/services/SYNO/Core/Security/DoS"
import { SYNO_Core_Security_DSM } from "$/services/SYNO/Core/Security/DSM"
import { SYNO_Core_Security_Firewall } from "$/services/SYNO/Core/Security/Firewall"

export class SYNO_Core_Security {
  constructor(private client: Client) {}

  get AutoBlock() {
    return new SYNO_Core_Security_AutoBlock(this.client)
  }

  get DoS() {
    return new SYNO_Core_Security_DoS(this.client)
  }

  get DSM() {
    return new SYNO_Core_Security_DSM(this.client)
  }

  get Firewall() {
    return new SYNO_Core_Security_Firewall(this.client)
  }
}
