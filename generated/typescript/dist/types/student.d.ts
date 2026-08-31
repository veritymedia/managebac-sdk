import type { PersonalInformation } from "./personal_information.js";
import type { StudentVariant2 } from "./student_variant2.js";
export type Student = PersonalInformation | StudentVariant2 | {
    [key: string]: unknown;
};
