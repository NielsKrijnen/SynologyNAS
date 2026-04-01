import type { Client } from "$/client"

export class SYNO_Finder_Bookmark {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Finder_Bookmark_get_Response>("SYNO.Finder.Bookmark", "get", 1)
  }
}

type SYNO_Finder_Bookmark_get_Response = { bookmarks: unknown[]; total: number }
