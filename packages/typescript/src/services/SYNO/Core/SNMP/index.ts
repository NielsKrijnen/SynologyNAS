import type { Client } from "$/client"

export class SYNO_Core_SNMP {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_SNMP_get_Response>("SYNO.Core.SNMP", "get", 1)
  }
}

type SYNO_Core_SNMP_get_Response = {
  contact: string
  enable_snmp: boolean
  enable_snmp_v1v2: boolean
  enable_snmp_v3: boolean
  location: string
  name: string
  node0_name: string
  node1_name: string
  rocommunity: string
  rouser: string
}
