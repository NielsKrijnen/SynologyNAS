import type { Client } from "$/client"

export class SYNO_FileStation_List {
  constructor(private client: Client) {}

  list_share(params?: SYNO_FileStation_List_list_share_Params) {
    return this.client.get<SYNO_FileStation_List_list_share_Response>("SYNO.FileStation.List", "list_share", 2, params)
  }
}

type SYNO_FileStation_List_list_share_Response = {
  offset: number
  shares: { isdir: boolean; name: string; path: string }[]
  total: number
}
type SYNO_FileStation_List_list_share_Params = {
  filetype?: "dir"
  sort_by?: "name"
  check_dir?: boolean
  additional: (
    | "real_path"
    | "owner"
    | "time"
    | "perm"
    | "mount_point_type"
    | "sync_share"
    | "volume_status"
    | "indexed"
    | "hybrid_share"
    | "worm_share"
    | "tiering_xattr"
  )[]
  enum_cluster?: boolean
  node?: string
}
