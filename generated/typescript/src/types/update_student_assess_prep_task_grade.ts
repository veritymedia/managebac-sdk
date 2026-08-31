export interface UpdateStudentAssessPrepTaskGrade {
  /**
   * Unique AssessPrep task UUID
   */
  assessPrepUuid?: string;
  /**
   * Unique identifier for an AssessPrep task
   */
  assessPrepUid?: string;
  /**
   * Unique identifier for an author in ManageBac
   */
  authorId?: number;
  /**
   * Submission PDF file
   */
  assessmentFileUrl?: string;
  /**
   * Grade points
   */
  points?: number;
  /**
   * Grade comment
   */
  comment?: string;
  /**
   * Unique identifier for an AssessPrep Submission
   */
  submissionId?: number;
  /**
   * Determines if submission is late
   */
  isLate?: boolean;
}
