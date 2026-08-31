import type { Submission } from "./submission.js";
import type { Meta } from "./meta.js";
export interface CourseworkListTaskSubmissionsResponse {
    submissions?: Submission[];
    meta?: Meta;
}
