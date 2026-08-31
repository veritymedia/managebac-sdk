import type { PersonalInformation } from "./personal_information.js";
import type { ParentVariant2 } from "./parent_variant2.js";

export type Parent = PersonalInformation | ParentVariant2 | { [key: string]: unknown };
