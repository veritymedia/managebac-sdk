/**
 * Submission mechanism — `dropbox` for file uploads, `google_drive` for tasks using the Google Drive integration.
 */
export type SubmissionMechanism = "dropbox" | "google_drive" | (string & {});
