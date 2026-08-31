export class OnlineAssessmentResource {
    client;
    constructor(client) {
        this.client = client;
    }
    async updateOnlineAssessment(params, options = {}) {
        return this.client.request("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/online_assessments/${encodeURIComponent(String(params.assessPrepUid))}`, {
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
            updateOnlineAssessment: (params, options = {}) => this.client.requestRaw("patch", `/v2p3/tasks/${encodeURIComponent(String(params.taskId))}/online_assessments/${encodeURIComponent(String(params.assessPrepUid))}`, { ...options, query: undefined, body: params.body, responseType: "OnlineAssessmentUpdateOnlineAssessmentResponse", requestType: "OnlineAssessmentUpdateOnlineAssessmentRequest", }),
        };
    }
}
