import { CourseworkResource } from "./resources/coursework.js";
import { AttendanceResource } from "./resources/attendance.js";
import { AuthenticationResource } from "./resources/authentication.js";
import { UtilitiesResource } from "./resources/utilities.js";
import { BehaviorNotesResource } from "./resources/behavior_notes.js";
import { MembershipsResource } from "./resources/memberships.js";
import { ExtendedApisResource } from "./resources/extended_apis.js";
import { ClassesResource } from "./resources/classes.js";
import { RelationshipsResource } from "./resources/relationships.js";
import { ParentsResource } from "./resources/parents.js";
import { AcademicsResource } from "./resources/academics.js";
import { StudentsResource } from "./resources/students.js";
import { OnlineAssessmentResource } from "./resources/online_assessment.js";
import { TeachersResource } from "./resources/teachers.js";
import { UnitClassAssignmentsResource } from "./resources/unit_class_assignments.js";
import { UnitsResource } from "./resources/units.js";
import { ProjectsResource } from "./resources/projects.js";
import { YearGroupsResource } from "./resources/year_groups.js";

import { validate } from "./validation.js";
import { ApiClient, type ClientOptions } from "./core.js";

export class ManageBacPlus {
  private readonly _client: ApiClient;
  readonly coursework: CourseworkResource;
  readonly attendance: AttendanceResource;
  readonly authentication: AuthenticationResource;
  readonly utilities: UtilitiesResource;
  readonly behaviorNotes: BehaviorNotesResource;
  readonly memberships: MembershipsResource;
  readonly extendedApis: ExtendedApisResource;
  readonly classes: ClassesResource;
  readonly relationships: RelationshipsResource;
  readonly parents: ParentsResource;
  readonly academics: AcademicsResource;
  readonly students: StudentsResource;
  readonly onlineAssessment: OnlineAssessmentResource;
  readonly teachers: TeachersResource;
  readonly unitClassAssignments: UnitClassAssignmentsResource;
  readonly units: UnitsResource;
  readonly projects: ProjectsResource;
  readonly yearGroups: YearGroupsResource;

  static readonly environments: Record<string, string> = {};

  constructor(options: ClientOptions = {}) {
    const baseUrl = options.baseUrl ?? (options.environment ? ManageBacPlus.environments[options.environment] : undefined) ?? "https://api.managebac.com";
    this._client = new ApiClient({
      baseUrl,
      apiKey: options.apiKey ?? process.env.MANAGE_BAC_PLUS_API_KEY,
      authPrefix: "Bearer ",
      timeoutMs: options.timeoutMs ?? 60000,
      maxRetries: options.maxRetries ?? 2,
      retryStatuses: options.retryStatuses ?? [408,409,429,500,502,503,504],
      packageVersion: "v2p3",
      omitStainlessHeaders: options.omitStainlessHeaders ?? false,
      idempotencyHeader: options.idempotencyHeader ?? null,
      hooks: options.hooks,
      validateResponses: options.validateResponses ?? false,
      validate,
    });
    this.coursework = new CourseworkResource(this._client);
    this.attendance = new AttendanceResource(this._client);
    this.authentication = new AuthenticationResource(this._client);
    this.utilities = new UtilitiesResource(this._client);
    this.behaviorNotes = new BehaviorNotesResource(this._client);
    this.memberships = new MembershipsResource(this._client);
    this.extendedApis = new ExtendedApisResource(this._client);
    this.classes = new ClassesResource(this._client);
    this.relationships = new RelationshipsResource(this._client);
    this.parents = new ParentsResource(this._client);
    this.academics = new AcademicsResource(this._client);
    this.students = new StudentsResource(this._client);
    this.onlineAssessment = new OnlineAssessmentResource(this._client);
    this.teachers = new TeachersResource(this._client);
    this.unitClassAssignments = new UnitClassAssignmentsResource(this._client);
    this.units = new UnitsResource(this._client);
    this.projects = new ProjectsResource(this._client);
    this.yearGroups = new YearGroupsResource(this._client);
  }
}
