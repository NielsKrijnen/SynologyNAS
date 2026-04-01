import type { Client } from "$/client"
import { SYNO_FileStation_Mount_List } from "$/services/SYNO/FileStation/Mount/List"

export class SYNO_FileStation_Mount {
  constructor(private client: Client) {}

  get List() {
    return new SYNO_FileStation_Mount_List(this.client)
  }
}
