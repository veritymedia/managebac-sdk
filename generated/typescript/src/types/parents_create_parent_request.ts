import type { ParentsCreateParentRequestParent } from "./parents_create_parent_request_parent.js";
import type { ParentsCreateParentRequestOptions } from "./parents_create_parent_request_options.js";

export interface ParentsCreateParentRequest {
  parent: ParentsCreateParentRequestParent;
  /**
   * Request directives applied during the create operation.
   */
  options?: ParentsCreateParentRequestOptions;
}
