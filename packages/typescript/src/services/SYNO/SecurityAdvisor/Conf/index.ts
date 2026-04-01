import type { Client } from "$/client"
import { SYNO_SecurityAdvisor_Conf_Location } from "$/services/SYNO/SecurityAdvisor/Conf/Location"

export class SYNO_SecurityAdvisor_Conf {
  constructor(private client: Client) {}

  get Location() {
    return new SYNO_SecurityAdvisor_Conf_Location(this.client)
  }
}
