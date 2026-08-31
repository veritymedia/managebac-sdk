export interface SubmissionFile {
  /**
   * Unique file ID in ManageBac.
   */
  id?: number;
  /**
   * Filename as uploaded.
   */
  filename?: string;
  /**
   * File size in bytes.
   */
  fileSize?: number;
  /**
   * MIME type derived from the filename extension.
   */
  contentType?: string;
  /**
   * ISO 8601 timestamp when the file was created.
   */
  uploadedAt?: string;
  /**
   * Turnitin originality score, when available. `null` when Turnitin has not run or the score is non-numeric.
   */
  turnitinScore?: number | null;
  /**
   * Relative path to the file-download endpoint, which authorises the request and 302-redirects to a short-lived signed URL for the file's content.
   */
  downloadPath?: string;
}
