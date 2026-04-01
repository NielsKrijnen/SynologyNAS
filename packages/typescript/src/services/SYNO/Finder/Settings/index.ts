import type { Client } from "$/client"

export class SYNO_Finder_Settings {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Finder_Settings_get_Response>("SYNO.Finder.Settings", "get", 1)
  }
}

type SYNO_Finder_Settings_get_Response = {
  db_reading_method: "fs_directory"
  display_vmtouch_option: boolean
  enable_cppjieba_dict: boolean
  enable_mlock: boolean
  enable_preload_indices: boolean
  enable_vmtouch: boolean
  max_alive_db_count: number
  max_search_hit_count: number
  reader_alive_timeout: number
  synotifyd_event_mask: number
  vmtouch_reserve_mem: number
}
