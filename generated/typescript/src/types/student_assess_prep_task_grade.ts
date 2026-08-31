export interface StudentAssessPrepTaskGrade {
  /**
   * Unique AssessPrep task UUID
   */
  assessPrepUuid?: string;
  /**
   * Unique identifier for an AssessPrep task
   */
  assessPrepUid?: string;
  /**
   * Submission PDF file
   */
  assessmentFileUrl?: string;
  /**
   * Unique identifier for an AssessPrep Submission
   */
  submissionId?: number;
  /**
   * Unique identifier for an author in ManageBac
   */
  authorId?: number;
}
