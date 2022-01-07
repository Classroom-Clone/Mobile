import { SendGetRequest } from '../AppService';
import { API_URL } from '@env';

export const GetAssignmentCommentsList = (token: string, assignmentId: number) =>
    SendGetRequest(`${API_URL}/assignments/${assignmentId}/comments?perPage=100&page=1`, token);

export const GetSubmissionCommentsList = (token: string, submissionId: number) =>
    SendGetRequest(`${API_URL}/submissions/${submissionId}/comments?perPage=100&page=1`, token);

export const GetPostCommentsList = (token: string, postId: number) =>
    SendGetRequest(`${API_URL}/posts/${postId}/comments?perPage=100&page=1`, token);
