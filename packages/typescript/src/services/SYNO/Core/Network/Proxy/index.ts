import type { Client } from "$/client"

export class SYNO_Core_Network_Proxy {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_Network_Proxy_get_Response>("SYNO.Core.Network.Proxy", "get", 1)
  }
}

type SYNO_Core_Network_Proxy_get_Response = {
  enable: boolean
  enable_auth: boolean
  enable_bypass: boolean
  enable_different_host: boolean
  http_host: string
  http_port: string
  https_host: string
  https_port: string
  password: string
  username: string
}
