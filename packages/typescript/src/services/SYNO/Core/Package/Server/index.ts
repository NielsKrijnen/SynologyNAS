import type { Client } from "$/client"

export class SYNO_Core_Package_Server {
  constructor(private client: Client) {}

  check() {
    return this.client.get<SYNO_Core_Package_Server_check_Response>("SYNO.Core.Package.Server", "check", 1)
  }
}

type SYNO_Core_Package_Server_check_Response = {
  action: string
  error: { code: number }
  stage: string
  success: boolean
}
