import type { UnitSubject } from "./unit_subject.js";
import type { UnitGuidingQuestions } from "./unit_guiding_questions.js";
import type { UnitPedagogicalApproaches } from "./unit_pedagogical_approaches.js";
import type { UnitLanguageAndLiteracyDevelopment } from "./unit_language_and_literacy_development.js";
import type { UnitCrossCurricularLinks } from "./unit_cross_curricular_links.js";
import type { UnitCoCurricularLinks } from "./unit_co_curricular_links.js";
import type { UnitDifferentiation } from "./unit_differentiation.js";
import type { UnitMetacognition } from "./unit_metacognition.js";
import type { UnitUnitActivitiesItem } from "./unit_unit_activities_item.js";
import type { UnitSupportMaterials } from "./unit_support_materials.js";
import type { UnitLinesOfInquiryItem } from "./unit_lines_of_inquiry_item.js";
import type { UnitStudentQuestionsItem } from "./unit_student_questions_item.js";
import type { UnitTeacherQuestionsItem } from "./unit_teacher_questions_item.js";
import type { UnitLearnerProfilesItem } from "./unit_learner_profiles_item.js";
import type { UnitKeyConcepts } from "./unit_key_concepts.js";
import type { UnitRelatedConcepts } from "./unit_related_concepts.js";
import type { UnitSpecifiedConceptsItem } from "./unit_specified_concepts_item.js";
import type { UnitCommunityEngagement } from "./unit_community_engagement.js";
import type { UnitApproachesToLearning } from "./unit_approaches_to_learning.js";
import type { UnitCriteria } from "./unit_criteria.js";
import type { UnitGlobalContexts } from "./unit_global_contexts.js";
import type { UnitTransdisciplinaryTheme } from "./unit_transdisciplinary_theme.js";
import type { UnitStandards } from "./unit_standards.js";
import type { UnitAimsItem } from "./unit_aims_item.js";
import type { UnitObjectivesItem } from "./unit_objectives_item.js";
import type { UnitSyllabus } from "./unit_syllabus.js";
import type { UnitScopeSequenceItem } from "./unit_scope_sequence_item.js";
export interface Unit {
    /**
     * Unique ID in ManageBac.
     */
    id?: number;
    /**
     * Unit title.
     */
    title?: string;
    /**
     * Unit description.
     */
    description?: string | null;
    /**
     * Whether the unit is archived.
     */
    archived?: boolean;
    /**
     * Whether this is an interdisciplinary unit.
     */
    iduUnit?: boolean | null;
    /**
     * Starting month number (1-12).
     */
    month?: number | null;
    /**
     * Starting week within the month.
     */
    week?: number | null;
    /**
     * Duration in weeks.
     */
    durationInWeeks?: number | null;
    /**
     * Number of hours.
     */
    hours?: number | null;
    /**
     * Whether the unit is for Standard Level.
     */
    sl?: boolean | null;
    /**
     * Whether the unit is for Higher Level.
     */
    hl?: boolean | null;
    /**
     * Language level.
     */
    languageLevel?: string | null;
    /**
     * Language B phases.
     */
    languageBPhases?: string | null;
    /**
     * Subject information.
     */
    subject?: UnitSubject | null;
    /**
     * Grade name.
     */
    grade?: string;
    /**
     * Grade number.
     */
    gradeNumber?: number;
    /**
     * IDs of classes associated with this unit.
     */
    classIds?: number[];
    /**
     * Computed start date of the unit.
     */
    startDate?: string | null;
    /**
     * Computed end date of the unit.
     */
    endDate?: string | null;
    /**
     * Central idea of the unit.
     */
    centralIdea?: string | null;
    /**
     * Guiding questions for the unit.
     */
    guidingQuestions?: UnitGuidingQuestions | null;
    /**
     * Formative assessment details.
     */
    formativeAssessment?: string | null;
    /**
     * Summative assessment details.
     */
    summativeAssessment?: string | null;
    /**
     * Peer and self assessment details.
     */
    peerSelfAssessment?: string | null;
    /**
     * Standardization and moderation details.
     */
    standardizationAndModeration?: string | null;
    /**
     * Methods used.
     */
    methods?: string | null;
    /**
     * Prior learning experiences.
     */
    priorLearningExperiences?: string | null;
    /**
     * Student expectations.
     */
    studentExpectations?: string | null;
    /**
     * Pedagogical approaches.
     */
    pedagogicalApproaches?: UnitPedagogicalApproaches | null;
    /**
     * Teaching strategies used.
     */
    teachingStrategies?: string | null;
    /**
     * Feedback details.
     */
    feedback?: string | null;
    /**
     * Dispositions.
     */
    dispositions?: string | null;
    /**
     * International mindedness.
     */
    internationalMindedness?: string | null;
    /**
     * Academic honesty.
     */
    academicHonesty?: string | null;
    /**
     * Information and communication technology.
     */
    informationCommunicationTechnology?: string | null;
    /**
     * Language and literacy development.
     */
    languageAndLiteracyDevelopment?: UnitLanguageAndLiteracyDevelopment | null;
    /**
     * Cross-curricular links.
     */
    crossCurricularLinks?: UnitCrossCurricularLinks | null;
    /**
     * Co-curricular links.
     */
    coCurricularLinks?: UnitCoCurricularLinks | null;
    /**
     * Differentiation details.
     */
    differentiation?: UnitDifferentiation | null;
    /**
     * Content details.
     */
    content?: string | null;
    /**
     * Skills details.
     */
    skills?: string | null;
    /**
     * Learning process details.
     */
    learningProcess?: string | null;
    /**
     * Metacognition details.
     */
    metacognition?: UnitMetacognition | null;
    /**
     * Unit activities.
     */
    unitActivities?: UnitUnitActivitiesItem[] | null;
    /**
     * Support materials.
     */
    supportMaterials?: UnitSupportMaterials | null;
    /**
     * Concepts.
     */
    concepts?: string | null;
    /**
     * Misunderstandings.
     */
    misunderstandings?: string | null;
    /**
     * Transfer goals.
     */
    transferGoals?: string | null;
    /**
     * Lines of inquiry for the unit (PYP only).
     */
    linesOfInquiry?: UnitLinesOfInquiryItem[] | null;
    /**
     * Student questions for the unit (PYP only).
     */
    studentQuestions?: UnitStudentQuestionsItem[] | null;
    /**
     * Teacher questions for the unit (PYP only).
     */
    teacherQuestions?: UnitTeacherQuestionsItem[] | null;
    /**
     * Learner profiles associated with the unit.
     */
    learnerProfiles?: UnitLearnerProfilesItem[] | null;
    /**
     * Key concepts and unit key concepts for the unit.
     */
    keyConcepts?: UnitKeyConcepts | null;
    /**
     * Related concepts for the unit (MYP only).
     */
    relatedConcepts?: UnitRelatedConcepts | null;
    /**
     * Specified concepts for the unit (MYP, disabled by default).
     */
    specifiedConcepts?: UnitSpecifiedConceptsItem[] | null;
    /**
     * Statement of inquiry (HTML).
     */
    statementOfInquiry?: string | null;
    /**
     * Conceptual understandings (HTML).
     */
    conceptualUnderstandings?: string | null;
    /**
     * Contextual lens scope with text per scope.
     */
    contextualLens?: {
        [key: string]: string;
    } | null;
    /**
     * Community engagement with selected options and comments.
     */
    communityEngagement?: UnitCommunityEngagement | null;
    /**
     * Approaches to learning tree structure with ATL details.
     */
    approachesToLearning?: UnitApproachesToLearning | null;
    /**
     * Assessment criteria grouped by subject and level with description.
     */
    criteria?: UnitCriteria | null;
    /**
     * Global contexts with explorations (MYP only).
     */
    globalContexts?: UnitGlobalContexts | null;
    /**
     * PYP transdisciplinary theme with selected descriptions.
     */
    transdisciplinaryTheme?: UnitTransdisciplinaryTheme | null;
    /**
     * Standards with core_standards and curriculum standards.
     */
    standards?: UnitStandards | null;
    /**
     * Academic integrity (HTML).
     */
    academicIntegrity?: string | null;
    /**
     * Agency (HTML).
     */
    agency?: string | null;
    /**
     * Action (HTML).
     */
    action?: string | null;
    /**
     * Student self assessment (HTML).
     */
    studentSelfAssessment?: string | null;
    /**
     * Success criteria (HTML).
     */
    successCriteria?: string | null;
    /**
     * Ongoing assessment (HTML).
     */
    ongoingAssessment?: string | null;
    /**
     * Attitudes (comma-separated values split into array).
     */
    attitudes?: string[] | null;
    /**
     * Aims grouped by year and subject with ancestry tree.
     */
    aims?: UnitAimsItem[] | null;
    /**
     * Objectives grouped by year and subject with ancestry tree.
     */
    objectives?: UnitObjectivesItem[] | null;
    /**
     * Syllabus tree structure.
     */
    syllabus?: UnitSyllabus | null;
    /**
     * Scope and sequence grouped by subject, phase/grade, strand, and kind.
     */
    scopeSequence?: UnitScopeSequenceItem[] | null;
    /**
     * Created date.
     */
    createdAt?: string;
    /**
     * Updated date.
     */
    updatedAt?: string;
}
