import type { Client } from "$/client"
import { SYNO_FileStation_Favorite } from "$/services/SYNO/FileStation/Favorite"
import { SYNO_FileStation_Info } from "$/services/SYNO/FileStation/Info"
import { SYNO_FileStation_List } from "$/services/SYNO/FileStation/List"
import { SYNO_FileStation_Mount } from "$/services/SYNO/FileStation/Mount"

export class SYNO_FileStation {
  constructor(private client: Client) {}

  get Favorite() {
    return new SYNO_FileStation_Favorite(this.client)
  }

  get Info() {
    return new SYNO_FileStation_Info(this.client)
  }

  get List() {
    return new SYNO_FileStation_List(this.client)
  }

  get Mount() {
    return new SYNO_FileStation_Mount(this.client)
  }
}
