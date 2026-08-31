import type { Membership } from "./membership.js";
import type { Meta } from "./meta.js";

export interface MembershipsListMembershipsResponse {
  memberships?: Membership[];
  meta?: Meta;
}
