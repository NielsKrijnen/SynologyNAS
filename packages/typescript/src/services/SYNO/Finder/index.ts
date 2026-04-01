import type { Client } from "$/client"
import { SYNO_Finder_Bookmark } from "$/services/SYNO/Finder/Bookmark"
import { SYNO_Finder_FileIndexing } from "$/services/SYNO/Finder/FileIndexing"
import { SYNO_Finder_Preference } from "$/services/SYNO/Finder/Preference"
import { SYNO_Finder_Settings } from "$/services/SYNO/Finder/Settings"

export class SYNO_Finder {
  constructor(private client: Client) {}

  get Bookmark() {
    return new SYNO_Finder_Bookmark(this.client)
  }

  get FileIndexing() {
    return new SYNO_Finder_FileIndexing(this.client)
  }

  get Preference() {
    return new SYNO_Finder_Preference(this.client)
  }

  get Settings() {
    return new SYNO_Finder_Settings(this.client)
  }
}
