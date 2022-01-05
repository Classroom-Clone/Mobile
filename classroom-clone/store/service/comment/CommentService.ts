import { SendGetRequest } from '../AppService';

export const GetAssigmentCommentsList = (token: string, assigmentId: number) =>
    SendGetRequest(
        `http://51.83.134.23/api/assignments/${assigmentId}/comments?perPage=100&page=1`,
        token
    );

export const GetSubmissionCommentsList = (token: string, submissionId: number) =>
    SendGetRequest(
        `http://51.83.134.23/api/submissions/${submissionId}/comments?perPage=100&page=1`,
        token
    );

export const GetPostCommentsList = (token: string, postId: number) =>
    SendGetRequest(`http://51.83.134.23/api/posts/${postId}/comments?perPage=100&page=1`, token);
