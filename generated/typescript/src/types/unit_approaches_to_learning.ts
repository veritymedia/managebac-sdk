import type { UnitApproachesToLearningAtlsItem } from "./unit_approaches_to_learning_atls_item.js";

/**
 * Approaches to learning tree structure with ATL details.
 */
export interface UnitApproachesToLearning {
  atls?: UnitApproachesToLearningAtlsItem[];
  atlDetails?: string | null;
}
