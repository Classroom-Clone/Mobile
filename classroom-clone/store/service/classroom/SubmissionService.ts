import {
    SendGetRequest,
    SendPostRequest,
    SendPutRequest,
    SendPutWithoutPayloadRequest
} from '../AppService';
import { CommentModel } from './Models/CommentModel';
import { EvaluateSubmissionModel } from './Models/EvaluateSubmissionModel';
import { API_URL } from '@env';

export const GetSubmissionsList = (token: string, assignmentId: number) =>
    SendGetRequest(`${API_URL}/assignments/${assignmentId}/submissions?perPage=100&page=1`, token);

export const PutEvaluateSubmission = (
    token: string,
    submissionId: number,
    points: EvaluateSubmissionModel
) => SendPutRequest(`${API_URL}/submissions/${submissionId}/evaluate`, token, points);

export const PutReturnSubmission = (token: string, submissionId: number) =>
    SendPutWithoutPayloadRequest(`${API_URL}/submissions/${submissionId}/return`, token);

export const PostCommentSubmission = (token: string, submissionId: number, points: CommentModel) =>
    SendPostRequest(`${API_URL}/submissions/${submissionId}/comments`, token, points);
