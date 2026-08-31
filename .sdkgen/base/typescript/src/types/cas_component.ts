export interface CasComponent {
  slug: string;
  label: string;
  trackHours?: boolean;
  showHoursChart?: boolean;
  casTotalHours?: number;
  showAimsAndGoals?: boolean;
  optionalQuestion?: string | null;
  activityDescriptionTitle?: string;
}
