import type { Client } from "$/client"

export class SYNO_Finder_Preference {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Finder_Preference_get_Response>("SYNO.Finder.Preference", "get", 1)
  }
}

type SYNO_Finder_Preference_get_Response = {
  enable_history: boolean
  max_fragment_num: number
  max_history_num: number
}
