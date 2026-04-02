import type { Client } from "$/client"
import { SYNO_Core_FileServ_AFP } from "$/services/SYNO/Core/FileServ/AFP"
import { SYNO_Core_FileServ_NFS } from "$/services/SYNO/Core/FileServ/NFS"
import { SYNO_Core_FileServ_SMB } from "$/services/SYNO/Core/FileServ/SMB"

export class SYNO_Core_FileServ {
  constructor(private client: Client) {}

  get AFP() {
    return new SYNO_Core_FileServ_AFP(this.client)
  }

  get NFS() {
    return new SYNO_Core_FileServ_NFS(this.client)
  }

  get SMB() {
    return new SYNO_Core_FileServ_SMB(this.client)
  }
}
