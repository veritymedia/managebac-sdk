/**
 * A mapping rule that converts a numeric score threshold to a letter mark. Used to translate percentage scores into grades (e.g. 95.5% and above = "A+").
 * 
 */
export interface TermGradeScale {
  /**
   * The minimum percentage score required to earn this mark. A student scoring at or above this value (but below the next higher threshold) receives this mark.
   * 
   */
  score?: number;
  /**
   * The letter or symbolic grade awarded when the score threshold is met (e.g. "A+", "B", "Pass").
   */
  mark?: string;
  /**
   * Short code identifying which program this scale applies to (e.g. "diploma", "igcse").
   */
  programCode?: string;
}
