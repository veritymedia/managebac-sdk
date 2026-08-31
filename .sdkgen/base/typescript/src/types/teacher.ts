import type { PersonalInformation } from "./personal_information.js";
import type { TeacherVariant2 } from "./teacher_variant2.js";

export type Teacher = PersonalInformation | TeacherVariant2 | { [key: string]: unknown };
