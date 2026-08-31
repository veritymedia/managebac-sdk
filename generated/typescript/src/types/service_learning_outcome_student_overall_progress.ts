/**
 * Normalized status slug. Falls back to "to_be_determined" when no status is assigned; always present, never null.
 */
export type ServiceLearningOutcomeStudentOverallProgress = "excellent" | "on_track" | "concern" | "to_be_determined" | "cas-approved" | "cas-completed" | "cas-rejected" | "cas-needs-approval" | "wait-listed" | "cas-review-sent" | "cas-reviewed" | "cas-incomplete" | (string & {});
