import type { Client } from "$/client"

export class SYNO_Core_FileServ_SMB {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_FileServ_SMB_get_Response>("SYNO.Core.FileServ.SMB", "get", 3)
  }
}

type SYNO_Core_FileServ_SMB_get_Response = {
  disable_shadow_copy: boolean
  disable_strict_allocate: boolean
  enable_access_based_share_enum: boolean
  enable_adserver: unknown | null
  enable_aio_read: boolean
  enable_delete_vetofiles: boolean
  enable_dirsort: boolean
  enable_durable_handles: boolean
  enable_enhance_log: boolean
  enable_fruit_locking: boolean
  enable_local_master_browser: boolean
  enable_mask: boolean
  enable_msdfs: boolean
  enable_multichannel: boolean
  enable_ntlmv1_auth: boolean
  enable_op_lock: boolean
  enable_perf_chart: boolean
  enable_reset_on_zero_vc: boolean
  enable_samba: boolean
  enable_server_signing: number
  enable_smb2_leases: boolean
  enable_smb3_directory_leasing: boolean
  enable_strict_sync: boolean
  enable_symlink: boolean
  enable_syno_catia: boolean
  enable_synotify: boolean
  enable_vetofile: boolean
  enable_widelink: boolean
  offline_files_support: boolean
  smb3_directory_leasing_scope: "home_only"
  smb_encrypt_transport: number
  smb_max_protocol: number
  smb_min_protocol: number
  syno_wildcard_search: boolean
  vetofile: string
  wins: string
  workgroup: string
}
