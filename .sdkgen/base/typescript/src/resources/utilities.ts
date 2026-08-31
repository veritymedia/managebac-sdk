import type { ApiClient, RequestOptions } from "../core.js";





export class UtilitiesResource {

  constructor(private readonly client: ApiClient) {

  }

  async showAvatarById(id: number, options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", `/v2p3/avatars/${encodeURIComponent(String(id))}`, {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  async ping(options: RequestOptions = {}): Promise<unknown> {
    return this.client.request<unknown>("get", "/v2p3/ping", {
      ...options,
      query: undefined,
      body: undefined,
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      showAvatarById: (id: number, options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", `/v2p3/avatars/${encodeURIComponent(String(id))}`, { ...options, query: undefined, body: undefined, }),
      ping: (options: RequestOptions = {}): Promise<{ data: unknown; response: globalThis.Response }> =>
        this.client.requestRaw<unknown>("get", "/v2p3/ping", { ...options, query: undefined, body: undefined, }),
    };
  }

}
