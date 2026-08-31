import type { YearGroupPblPresentationComponentComponentDocumentsItem } from "./year_group_pbl_presentation_component_component_documents_item.js";
import type { YearGroupPblPresentationComponentComponentItemsItem } from "./year_group_pbl_presentation_component_component_items_item.js";

export interface YearGroupPblPresentationComponentComponent {
  /**
   * Identifier of component
   */
  slug?: string;
  /**
   * Presentation title
   */
  title?: string | null;
  /**
   * Presentation duration
   */
  duration?: number | null;
  documents?: YearGroupPblPresentationComponentComponentDocumentsItem[];
  items?: YearGroupPblPresentationComponentComponentItemsItem[];
}
