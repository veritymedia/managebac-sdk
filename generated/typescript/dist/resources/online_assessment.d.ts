import type { ApiClient, RequestOptions } from "../core.js";
import type { OnlineAssessmentUpdateOnlineAssessmentRequest } from "../types/online_assessment_update_online_assessment_request.js";
import type { OnlineAssessmentUpdateOnlineAssessmentResponse } from "../types/online_assessment_update_online_assessment_response.js";
export interface OnlineAssessmentUpdateOnlineAssessmentParams {
    taskId: number;
    assessPrepUid: string;
    body?: OnlineAssessmentUpdateOnlineAssessmentRequest;
}
export declare class OnlineAssessmentResource {
    private readonly client;
    constructor(client: ApiClient);
    updateOnlineAssessment(params: OnlineAssessmentUpdateOnlineAssessmentParams, options?: RequestOptions): Promise<OnlineAssessmentUpdateOnlineAssessmentResponse>;
    /** Same methods, returning { data, response } with the raw HTTP Response. */
    get withRawResponse(): {
        updateOnlineAssessment: (params: OnlineAssessmentUpdateOnlineAssessmentParams, options?: RequestOptions) => Promise<{
            data: OnlineAssessmentUpdateOnlineAssessmentResponse;
            response: globalThis.Response;
        }>;
    };
}
