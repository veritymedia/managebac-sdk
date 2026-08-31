import type { SubmissionMechanism } from "./submission_mechanism.js";
import type { SubmissionFile } from "./submission_file.js";
export interface Submission {
    /**
     * Composite identifier in the form `<task_id>-<student_id>`.
     */
    id?: string;
    /**
     * ID of the task this submission belongs to.
     */
    taskId?: number;
    /**
     * ID of the student who owns this submission.
     */
    studentId?: number;
    /**
     * Submission mechanism — `dropbox` for file uploads, `google_drive` for tasks using the Google Drive integration.
     */
    mechanism?: SubmissionMechanism;
    /**
     * ISO 8601 timestamp of submission. For `dropbox`, the latest `created_at` among the student's files. For `google_drive`, the `submitted_at` of the underlying TaskWork — `null` for rows still in `waiting` or `in_progress` state.
     */
    submittedAt?: string | null;
    /**
     * ISO 8601 timestamp of the latest underlying change.
     */
    updatedAt?: string;
    /**
     * Whether submissions are currently locked for this student on this task.
     */
    locked?: boolean;
    /**
     * Submission status. Dropbox: one of `submitted`, `late`, `early_and_late`, `pending`, or `null` if the dropbox is disabled. Google Drive: one of `submitted`, `late`, `in_progress`, `waiting`.
     */
    status?: string | null;
    /**
     * Files attached to the submission. Empty for Google Drive task_works still in `waiting` or `in_progress` state.
     */
    files?: SubmissionFile[];
}
