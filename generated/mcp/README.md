# API V2P3 MCP Server

Generated Model Context Protocol server (protocol `2025-06-18`, zero dependencies).

## Tool modes

| Mode | Tools | When |
| --- | --- | --- |
| `typed` | one tool per endpoint, fully typed | small/medium APIs |
| `dynamic` | `list_api_endpoints`, `get_api_endpoint_schema`, `invoke_api_endpoint` | large APIs (token-efficient) |
| `code` | `execute` + `search_docs` | agents that write code |

Default mode: **dynamic**. Override with `--tools <mode>`.

## Run (stdio, for Claude Desktop / Cursor / Claude Code)

```json
{
  "mcpServers": {
    "manage_bac_plus": {
      "command": "node",
      "args": ["dist/server.js"],
      "env": { "MANAGE_BAC_PLUS_API_KEY": "your-api-key" }
    }
  }
}
```

## Run (streamable HTTP, for remote/hosted)

```sh
node dist/server.js --transport http --port 3000
```

```json
{ "mcpServers": { "manage_bac_plus": { "url": "http://localhost:3000/" } } }
```

## Flags

```text
--transport stdio|http        transport (default stdio)
--port <n>                    HTTP port (default 3000)
--tools typed|dynamic|code    tool mode
--tool <name>                 (repeatable) mount only these tools
--scope read|write|<tag>      (repeatable) filter tools by class or OpenAPI tag
--allowed-methods <regex>     (repeatable) only allow commands matching these
--blocked-methods <regex>     (repeatable) block commands matching these
--allow-http-gets             permit GETs from the code/execute tool
--oauth-client-id <id>        OAuth2 client id (else env)
--oauth-client-secret <s>     OAuth2 client secret (else env)
--self-test                   validate every mode offline, exit
```

Least-privilege example (read-only, one resource):

```sh
node dist/server.js --scope read --allowed-methods "customers\..*" --blocked-methods ".*\.delete"
```
