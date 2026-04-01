import type { Client } from "$/client"

export class SYNO_FileStation_Info {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_FileStation_Info_get_Response>("SYNO.FileStation.Info", "get", 1)
  }
}

type SYNO_FileStation_Info_get_Response = {
  allow_heic_original: boolean
  allow_normal_disable_html: boolean
  enable_list_usergrp: boolean
  enable_send_email_attachment: boolean
  enable_view_google: boolean
  enable_view_microsoft: boolean
  hostname: string
  is_manager: boolean
  items: { gid: number }[]
  support_file_request: boolean
  support_sharing: boolean
  support_vfs: boolean
  support_virtual: { enable_iso_mount: boolean; enable_remote_mount: boolean }
  support_virtual_protocol: string
  system_codepage: string
  uid: number
}
