import type { Client } from "$/client"

export class SYNO_Core_FileServ_NFS {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_FileServ_NFS_get_Response>("SYNO.Core.FileServ.NFS", "get", 2)
  }
}

type SYNO_Core_FileServ_NFS_get_Response = {
  enable_nfs: boolean
  enable_nfs_v4: boolean
  enabled_minor_ver: number
  nfs_v4_domain: string
  read_size: number
  support_encrypt_share: number
  support_major_ver: number
  support_minor_ver: number
  unix_pri_enable: boolean
  write_size: number
}
