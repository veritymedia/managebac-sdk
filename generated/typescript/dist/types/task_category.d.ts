export interface TaskCategory {
    /**
     * Unique ID in ManageBac.
     */
    id?: number;
    /**
     * Task category name.
     */
    name?: string;
    /**
     * Background color for Task Category.
     */
    backgroundColor?: string;
    /**
     * Text color for Task Category.
     */
    color?: string;
    /**
     * The weight of the Task Category.
     */
    weight?: number;
}
