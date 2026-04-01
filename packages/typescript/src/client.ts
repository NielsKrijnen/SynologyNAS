import type { APIResponse } from "$/types"

export class Client {
  private readonly baseUrl: string
  private sid: string | null = null
  private synoToken: string | null = null

  constructor(
    baseUrl: string,
    options?: {
      sid?: string | null
      synoToken?: string | null
    }
  ) {
    this.baseUrl = baseUrl

    if (options) {
      this.sid = options.sid ?? null
      this.synoToken = options.synoToken ?? null
    }
  }

  async get<T>(
    api: string,
    method: string,
    version: number,
    params?: Record<string, string | number | boolean | object>,
    path: string = "entry.cgi"
  ) {
    const url = new URL(`${this.baseUrl}/webapi/${path}`)
    url.searchParams.set("api", api)
    url.searchParams.set("method", method)
    url.searchParams.set("version", version.toString())

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined) {
          if (Array.isArray(value) || typeof value === "object") {
            url.searchParams.set(key, JSON.stringify(value))
          } else {
            url.searchParams.set(key, value.toString())
          }
        }
      }
    }

    if (this.sid) url.searchParams.set("_sid", this.sid)

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Referer: this.baseUrl
    }
    if (this.synoToken) headers["X-SYNO-TOKEN"] = this.synoToken

    const response = await fetch(url, {
      method: "GET",
      headers,
      redirect: "follow"
    })

    let json: APIResponse<T>
    try {
      json = (await response.clone().json()) as APIResponse<T>
    } catch {
      throw await response.text()
    }

    if (json.success) {
      return json.data
    } else {
      throw json.error
    }
  }

  setSession(sid: string | null, synoToken: string | null) {
    this.sid = sid
    this.synoToken = synoToken
  }

  hasSession() {
    return this.sid !== null && this.synoToken !== null
  }
}
