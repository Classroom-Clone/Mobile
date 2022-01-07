import { CommentsListInterface } from './CommentInterface';

export interface CommentState {
    submissionCommentState: CommentsListInterface | null;
    postCommentState: CommentsListInterface | null;
    assignmentCommentState: CommentsListInterface | null;
}
