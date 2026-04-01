import type { Client } from "$/client"
import { SYNO_ActiveInsight_CompleteCollection } from "$/services/SYNO/ActiveInsight/CompleteCollection"

export class SYNO_ActiveInsight {
  constructor(private client: Client) {}

  get CompleteCollection() {
    return new SYNO_ActiveInsight_CompleteCollection(this.client)
  }
}
