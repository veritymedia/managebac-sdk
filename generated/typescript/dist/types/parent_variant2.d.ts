import type { ParentVariant2Salutation } from "./parent_variant2_salutation.js";
export interface ParentVariant2 {
    /**
     * Unique ID for a parent in ManageBac.
     */
    id?: number;
    /**
     * Parent/guardian’s title.
     */
    salutation?: ParentVariant2Salutation;
    /**
     * Parent/guardian’s work position.
     */
    title?: string;
    /**
     * Parent/guardian’s employer.
     */
    employer?: string;
    /**
     * Parent/guardian’s work email address (may differ to email field).
     */
    workEmail?: string;
    /**
     * Parent/guardian’s work number.
     */
    workPhone?: string;
    /**
     * First line of parent/guardian’s work address.
     */
    workAddress?: string;
    /**
     * Second (optional) line of parent/guardian’s work address.
     */
    workAddressIi?: string;
    /**
     * Fax number for parent/guardian’s work
     */
    workFax?: string;
    /**
     * City of parent/guardian’s work address.
     */
    workCity?: string;
    /**
     * State of parent/guardian’s work address.
     */
    workState?: string;
    /**
     * Postal/zip code of parent/guardian’s work address.
     */
    workPostalCode?: string;
    /**
     * Country of parent/guardian’s address.
     */
    workCountry?: string;
    /**
     * SchoolsBuddy uniq ID
     */
    sbId?: string;
    /**
     * OpenApply uniq ID
     */
    oaId?: string;
    /**
     * Unique ID for offspring/wards of the parent/guardian.
     */
    childIds?: number[];
}
