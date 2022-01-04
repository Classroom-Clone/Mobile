import { SendGetRequest, SendPutRequest, SendPutWithoutPayloadRequest } from '../AppService';
import { EvaluateSubmissionModel } from './Models/EvaluateSubmissionModel';

export const GetSubmissionsList = (token: string, assigmentId: number) =>
    SendGetRequest(
        `http://51.83.134.23/api/assignments/${assigmentId}/submissions?perPage=100&page=1`,
        token
    );

export const PutEvaluateSubmission = (token: string, submissionId: number, points: EvaluateSubmissionModel) =>
    SendPutRequest(
        `http://51.83.134.23/api/submissions/${submissionId}/evaluate`,
        token,
        points
    );

export const PutReturnSubmission = (token: string, submissionId: number) =>
    SendPutWithoutPayloadRequest(
        `http://51.83.134.23/api/submissions/${submissionId}/return`,
        token
    );

