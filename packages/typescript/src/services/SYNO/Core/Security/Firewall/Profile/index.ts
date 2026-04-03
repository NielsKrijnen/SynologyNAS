import type { Client } from "$/client"

export class SYNO_Core_Security_Firewall_Profile {
  constructor(private client: Client) {}

  list() {
    return this.client.get<SYNO_Core_Security_Firewall_Profile_list_Response>(
      "SYNO.Core.Security.Firewall.Profile",
      "list",
      1
    )
  }
}

type SYNO_Core_Security_Firewall_Profile_list_Response = { profile_names: string[] }
