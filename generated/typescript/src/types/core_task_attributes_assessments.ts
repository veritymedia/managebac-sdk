import type { CoreTaskAttributesAssessmentsCriteria } from "./core_task_attributes_assessments_criteria.js";
import type { CoreTaskAttributesAssessmentsPoints } from "./core_task_attributes_assessments_points.js";
import type { CoreTaskAttributesAssessmentsBinary } from "./core_task_attributes_assessments_binary.js";
import type { CoreTaskAttributesAssessmentsComment } from "./core_task_attributes_assessments_comment.js";

export interface CoreTaskAttributesAssessments {
  criteria?: CoreTaskAttributesAssessmentsCriteria;
  points?: CoreTaskAttributesAssessmentsPoints;
  binary?: CoreTaskAttributesAssessmentsBinary;
  comment?: CoreTaskAttributesAssessmentsComment;
}
