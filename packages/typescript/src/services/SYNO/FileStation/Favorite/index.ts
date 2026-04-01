import type { Client } from "$/client"

export class SYNO_FileStation_Favorite {
  constructor(private client: Client) {}

  list(params?: SYNO_FileStation_Favorite_list_Params) {
    return this.client.get<SYNO_FileStation_Favorite_list_Response>("SYNO.FileStation.Favorite", "list", 2, params)
  }
}

type SYNO_FileStation_Favorite_list_Response = {
  favorites: { path: string; name: string; status: "valid" | "broken" }[]
  offset: number
  total: number
}
type SYNO_FileStation_Favorite_list_Params = {
  filetype?: "dir"
  sort_by?: "name"
  check_dir?: boolean
  additional?: (
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
