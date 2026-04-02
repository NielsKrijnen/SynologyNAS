import type { Client } from "$/client"

export class SYNO_Core_FileServ_AFP {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_FileServ_AFP_get_Response>("SYNO.Core.FileServ.AFP", "get", 1)
  }
}

type SYNO_Core_FileServ_AFP_get_Response = {
  enable_afp: boolean
  enable_disconnect_quick: boolean
  enable_umask: boolean
  time_machine: string
}
