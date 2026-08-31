import type { UpdateOnlineAssessmentCriteriaLabelsItemDescriptorsItem } from "./update_online_assessment_criteria_labels_item_descriptors_item.js";

export interface UpdateOnlineAssessmentCriteriaLabelsItem {
  /**
   * Criteria name without label
   */
  label?: string;
  /**
   * Criteria label
   */
  title?: string;
  descriptors?: UpdateOnlineAssessmentCriteriaLabelsItemDescriptorsItem[];
}
