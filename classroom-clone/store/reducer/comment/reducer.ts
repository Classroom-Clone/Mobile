import ActionsEnums from '../../../helpers/enums/ActionEnums';
import commentInitialState from '../../initialState/comment/commentInitialState';
import { IAction } from '../../interface';
import { CommentState } from '../../interface/comment';
import { CommentsListInterface } from '../../interface/comment/CommentInterface';

export type CommentType =
    | IAction<ActionsEnums.GET_SUBMISSION_COMMENTS_LIST, CommentsListInterface>
    | IAction<ActionsEnums.GET_ASSIGNMENTS_COMMENTS_LIST, CommentsListInterface>
    | IAction<ActionsEnums.GET_POST_COMMENTS_LIST, CommentsListInterface>;
export default function reducerComment(
    state: CommentState = commentInitialState,
    action: CommentType
): CommentState {
    switch (action.type) {
        case ActionsEnums.GET_ASSIGNMENTS_COMMENTS_LIST:
            return { ...state, assignmentCommentState: action.payload };
        case ActionsEnums.GET_SUBMISSION_COMMENTS_LIST:
            return { ...state, submissionCommentState: action.payload };
        case ActionsEnums.GET_POST_COMMENTS_LIST:
            return { ...state, postCommentState: action.payload };
        default:
            return state;
    }
}
