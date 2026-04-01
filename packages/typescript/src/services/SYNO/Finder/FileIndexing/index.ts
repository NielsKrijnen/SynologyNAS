import type { Client } from "$/client"
import { SYNO_Finder_FileIndexing_Folder } from "$/services/SYNO/Finder/FileIndexing/Folder"

export class SYNO_Finder_FileIndexing {
  constructor(private client: Client) {}

  get Folder() {
    return new SYNO_Finder_FileIndexing_Folder(this.client)
  }
}
