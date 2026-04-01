import type { Client } from "$/client"

export class SYNO_Finder_FileIndexing_Folder {
  constructor(private client: Client) {}

  list(params?: SYNO_Finder_FileIndexing_Folder_list_Params) {
    return this.client.get<SYNO_Finder_FileIndexing_Folder_list_Response>(
      "SYNO.Finder.FileIndexing.Folder",
      "list",
      1,
      params
    )
  }
}

type SYNO_Finder_FileIndexing_Folder_list_Response = { folder: unknown[]; offset: number; total: number }
type SYNO_Finder_FileIndexing_Folder_list_Params = {
  direction?: "asc" | "desc"
  sort_by?: "path"
  offset?: number
  additional?: unknown[]
}
