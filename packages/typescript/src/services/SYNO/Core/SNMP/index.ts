import type { Client } from "$/client"

export class SYNO_Core_SNMP {
  constructor(private client: Client) {}

  get() {
    return this.client.get<SYNO_Core_SNMP_get_Response>("SYNO.Core.SNMP", "get", 1)
  }

  async set(params: SYNO_Core_SNMP_set_Params) {
    await this.client.get("SYNO.Core.SNMP", "set", 1, params)
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
type SYNO_Core_SNMP_set_Params =
  | { enable_snmp: false }
  | {
      enable_snmp: true
      enable_snmp_v1v2: true
      enable_snmp_v3: false
      rocommunity: string
      name?: string
      location?: string
      contact?: string
    }
  | {
      enable_snmp: true
      enable_snmp_v1v2: false
      enable_snmp_v3: true
      enable_privacy?: false
      rouser: string
      auth_type: "MD5" | "SHA"
      password: string
      name?: string
      location?: string
      contact?: string
    }
  | {
      enable_snmp: true
      enable_snmp_v1v2: false
      enable_snmp_v3: true
      enable_snmp_privacy: true
      rouser: string
      auth_type: "MD5" | "SHA"
      password: string
      privacy_type: "DES" | "AES"
      privacy_key: string
      name?: string
      location?: string
      contact?: string
    }
  | {
      enable_snmp: true
      enable_snmp_v1v2: true
      enable_snmp_v3: true
      enable_privacy?: false
      rocommunity: string
      rouser: string
      auth_type: "MD5" | "SHA"
      password: string
      name?: string
      location?: string
      contact?: string
    }
  | {
      enable_snmp: true
      enable_snmp_v1v2: true
      enable_snmp_v3: true
      enable_privacy: true
      rocommunity: string
      rouser: string
      auth_type: "MD5" | "SHA"
      password: string
      privacy_type: "DES" | "AES"
      privacy_key: string
      name?: string
      location?: string
      contact?: string
    }
