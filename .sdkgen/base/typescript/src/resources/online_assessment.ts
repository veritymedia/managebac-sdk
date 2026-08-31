import type { ApiClient, RequestOptions } from "../core.js";
import type { OnlineAssessmentUpdateOnlineAssessmentRequest } from "../types/online_assessment_update_online_assessment_request.js";
import type { OnlineAssessmentUpdateOnlineAssessmentResponse } from "../types/online_assessment_update_online_assessment_response.js";


export interface OnlineAssessmentUpdateOnlineAssessmentParams {
  taskId: number;
  assessPrepUid: string;
  body?: OnlineAssessmentUpdateOnlineAssessmentRequest;
}

export class OnlineAssessmentResource {

  constructor(private readonly client: ApiClient) {

  }

  async updateOnlineAssessment(params: OnlineAssessmentUpdateOnlineAssessmentParams, options: RequestOptions = {}): Promise<OnlineAssessmentUpdateOnlineAssessmentResponse> {
    return this.client.request<OnlineAssessmentUpdateOnlineAssessmentResponse>("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/online_assessments/${encodeURIComponent(String(params.assessPrepUid))}`, {
      ...options,
      query: undefined,
      body: params.body,
      responseType: "OnlineAssessmentUpdateOnlineAssessmentResponse",
      requestType: "OnlineAssessmentUpdateOnlineAssessmentRequest",
    });
  }

  /** Same methods, returning { data, response } with the raw HTTP Response. */
  get withRawResponse() {
    return {
      updateOnlineAssessment: (params: OnlineAssessmentUpdateOnlineAssessmentParams, options: RequestOptions = {}): Promise<{ data: OnlineAssessmentUpdateOnlineAssessmentResponse; response: globalThis.Response }> =>
        this.client.requestRaw<OnlineAssessmentUpdateOnlineAssessmentResponse>("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/online_assessments/${encodeURIComponent(String(params.assessPrepUid))}`, { ...options, query: undefined, body: params.body, responseType: "OnlineAssessmentUpdateOnlineAssessmentResponse", requestType: "OnlineAssessmentUpdateOnlineAssessmentRequest", }),
    };
  }

}
