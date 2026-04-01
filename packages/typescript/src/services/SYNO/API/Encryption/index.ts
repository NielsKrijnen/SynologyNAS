import type { Client } from "$/client"

export class SYNO_API_Encryption {
  constructor(private client: Client) {}

  getinfo() {
    return this.client.get<SYNO_API_Encryption_getinfo_Response>("SYNO.API.Encryption", "getinfo", 1)
  }
}

type SYNO_API_Encryption_getinfo_Response = {
  cipherkey: string
  ciphertoken: string
  public_key: string
  server_time: number
}
