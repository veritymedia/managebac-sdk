import type { CoreTaskPatchAttributesAssessmentsCriteria } from "./core_task_patch_attributes_assessments_criteria.js";
import type { CoreTaskPatchAttributesAssessmentsPoints } from "./core_task_patch_attributes_assessments_points.js";
import type { CoreTaskPatchAttributesAssessmentsBinary } from "./core_task_patch_attributes_assessments_binary.js";
import type { CoreTaskPatchAttributesAssessmentsComment } from "./core_task_patch_attributes_assessments_comment.js";

export interface CoreTaskPatchAttributesAssessments {
  criteria?: CoreTaskPatchAttributesAssessmentsCriteria;
  points?: CoreTaskPatchAttributesAssessmentsPoints;
  binary?: CoreTaskPatchAttributesAssessmentsBinary;
  comment?: CoreTaskPatchAttributesAssessmentsComment;
}
