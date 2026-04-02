import type { Client } from "$/client"

export class SYNO_Core_Package_Installation {
  constructor(private client: Client) {}

  get_queue(params: SYNO_Core_Package_Installation_get_queue_Params) {
    return this.client.get<SYNO_Core_Package_Installation_get_queue_Response>(
      "SYNO.Core.Package.Installation",
      "get_queue",
      1,
      params
    )
  }
}

type SYNO_Core_Package_Installation_get_queue_Response = {
  broken_pkgs: unknown[]
  cause_pausing_pkgs: unknown[]
  conflicted_pkgs: unknown[]
  non_exist_pkgs: unknown[]
  paused_pkgs: unknown[]
  queue: { beta: boolean; pkg: string; volume: string }[]
  replaced_pkgs: unknown[]
}
type SYNO_Core_Package_Installation_get_queue_Params = {
  pkgs: { pkg: string; operation: "install"; version: string; beta: boolean }[]
}
