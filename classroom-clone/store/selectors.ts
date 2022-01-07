import { RootState } from '.';

export const authState = (state: RootState) => state.auth.loginState;
export const classroomListState = (state: RootState) => state.classroom.listState;
export const membersListState = (state: RootState) => state.classroom.membersState;
export const postsListState = (state: RootState) => state.classroom.postState;
export const assignmentsListState = (state: RootState) => state.classroom.assignmentState;
export const submissionsListState = (state: RootState) => state.classroom.submissionState;
export const submissionCommentsListState = (state: RootState) =>
    state.comment.submissionCommentState;
