import type { CoreTaskPatchAttributesAssessments } from "./core_task_patch_attributes_assessments.js";
export interface CoreTaskPatchAttributes {
    authorId?: number;
    name?: string;
    dueDate?: string;
    assessmentTypeId?: number;
    taskCategoryId?: number;
    notifyGroup?: boolean;
    notifyParents?: boolean;
    unitId?: number;
    lessonExperienceId?: number;
    hl?: boolean;
    sl?: boolean;
    notes?: string;
    enableDropbox?: boolean;
    enableTurnitin?: boolean;
    dropboxOpeningDays?: number;
    assignedStudentIds?: number[];
    draft?: boolean;
    /**
     * When true, assessment results are hidden from students and parents.
     */
    hideAssessmentResults?: boolean;
    phase?: number;
    assessments?: CoreTaskPatchAttributesAssessments;
}
