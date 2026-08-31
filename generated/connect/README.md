# API V2P3 Connect Client

Two bindings from one IR:
- **Connect HTTP+JSON** — `import { createConnectClient } from "manage-bac-plus-connect"`
- **gRPC-web (protobuf binary + length-prefix framing)** — `import { createGrpcWebClient } from "manage-bac-plus-connect/grpcweb"`

```ts
import { createConnectClient } from "manage-bac-plus-connect";
const client = createConnectClient();
```
