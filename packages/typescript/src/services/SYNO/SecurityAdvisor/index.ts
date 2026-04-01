import type { Client } from "$/client"
import { SYNO_SecurityAdvisor_Conf } from "$/services/SYNO/SecurityAdvisor/Conf"

export class SYNO_SecurityAdvisor {
  constructor(private client: Client) {}

  get Conf() {
    return new SYNO_SecurityAdvisor_Conf(this.client)
  }
}
