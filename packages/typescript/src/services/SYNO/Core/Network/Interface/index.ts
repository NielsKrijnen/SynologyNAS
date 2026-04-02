import type { Client } from "$/client"

export class SYNO_Core_Network_Interface {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Network_Interface_list_Response>("SYNO.Core.Network.Interface", "list", 1)
  }
}

type SYNO_Core_Network_Interface_list_Response = {
  ifname: string
  ip: string
  mask: string
  speed: number
  status: string
  type: string
  use_dhcp: boolean
}[]
