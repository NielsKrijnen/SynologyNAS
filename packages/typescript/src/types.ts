export type APIResponse<T> = { data: T; success: true } | { error: Record<string, never>; success: false }

export type EmptyResponse = Record<string, never>

export type Options = (
  | { quickconnect: string }
  | { server: { scheme?: "http" | "https"; host: string; port: number } }
) & {
  sid?: string
  synoToken?: string
}
