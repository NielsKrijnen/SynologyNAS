import type { Client } from "$/client"
import { SYNO_ActiveInsight } from "$/services/SYNO/ActiveInsight"
import { SYNO_API } from "$/services/SYNO/API"
import { SYNO_Auth } from "$/services/SYNO/Auth"

export class SYNO {
  constructor(private client: Client) {}

  get API() {
    return new SYNO_API(this.client)
  }

  get ActiveInsight() {
    return new SYNO_ActiveInsight(this.client)
  }

  get Auth() {
    return new SYNO_Auth(this.client)
  }
}
