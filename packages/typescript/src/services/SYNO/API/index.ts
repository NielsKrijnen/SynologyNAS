import type { Client } from "$/client"
import { SYNO_API_Auth } from "$/services/SYNO/API/Auth"
import { SYNO_API_Encryption } from "$/services/SYNO/API/Encryption"
import { SYNO_API_Info } from "$/services/SYNO/API/Info"

export class SYNO_API {
  constructor(private client: Client) {}

  get Auth() {
    return new SYNO_API_Auth(this.client)
  }

  get Encryption() {
    return new SYNO_API_Encryption(this.client)
  }

  get Info() {
    return new SYNO_API_Info(this.client)
  }
}
