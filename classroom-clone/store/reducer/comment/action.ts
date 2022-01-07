import ActionsEnums from '../../../helpers/enums/ActionEnums';
import {
    GetAssignmentCommentsList,
    GetPostCommentsList,
    GetSubmissionCommentsList
} from '../../service/comment/CommentService';

export async function FetchAssignmentCommentsList(
    dispatch: any,
    token: string,
    assignmentId: number
) {
    const result = await GetAssignmentCommentsList(token, assignmentId);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_ASSIGNMENTS_COMMENTS_LIST
    });
}

export async function FetchSubmissionCommentsList(
    dispatch: any,
    token: string,
    submissionId: number
) {
    const result = await GetSubmissionCommentsList(token, submissionId);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_SUBMISSION_COMMENTS_LIST
    });
}

export async function FetchPostCommentsList(dispatch: any, token: string, postId: number) {
    const result = await GetPostCommentsList(token, postId);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_POST_COMMENTS_LIST
    });
}
