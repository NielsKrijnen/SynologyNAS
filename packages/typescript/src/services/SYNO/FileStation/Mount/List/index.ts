import type { Client } from "$/client"

export class SYNO_FileStation_Mount_List {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_FileStation_Mount_List_get_Response>("SYNO.FileStation.Mount.List", "get", 1)
  }
}

type SYNO_FileStation_Mount_List_get_Response = {
  isoList: unknown[]
  mountConfig: { enable_iso_mount: boolean; enable_remote_mount: boolean }
  remoteList: unknown[]
}
