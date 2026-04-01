import type { Client } from "$/client"
import { SYNO_Entry_Request } from "$/services/SYNO/Entry/Request"

export class SYNO_Entry {
  constructor(private client: Client) {}

  get Request() {
    return new SYNO_Entry_Request(this.client)
  }
}
