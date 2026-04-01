import type { Client } from "$/client"

export class SYNO_SecurityAdvisor_Conf_Location {
  constructor(private client: Client) {}

  get() {
    return this.client.get("SYNO.SecurityAdvisor.Conf.Location", "get", 1)
  }
}
