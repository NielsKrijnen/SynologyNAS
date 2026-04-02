import type { Client } from "$/client"

export class SYNO_Core_Certificate_CRT {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Certificate_CRT_list_Response>("SYNO.Core.Certificate.CRT", "list", 1)
  }
}

type SYNO_Core_Certificate_CRT_list_Response = {
  certificates: {
    desc: string
    id: string
    is_broken: boolean
    is_default: boolean
    issuer: { city: string; common_name: string; country: string; organization: string }
    key_types: string
    renewable: boolean
    self_signed_cacrt_info: {
      issuer: { city: string; common_name: string; country: string; organization: string }
      subject: { city: string; common_name: string; country: string; organization: string }
    }
    services: {
      display_name: string
      display_name_i18n?: string
      isPkg: boolean
      multiple_cert?: boolean
      owner: string
      service: string
      subscriber: string
      user_setable?: boolean
    }[]
    signature_algorithm: string
    subject: { city: string; common_name: string; country: string; organization: string; sub_alt_name: string[] }
    user_deletable: boolean
    valid_from: string
    valid_to: string
  }[]
}
