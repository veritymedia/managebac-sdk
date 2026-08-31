import type { Parent } from "./parent.js";
import type { Meta } from "./meta.js";

export interface ParentsListParentsResponse {
  parents?: Parent[];
  meta?: Meta;
}
