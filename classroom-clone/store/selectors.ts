import { RootState } from '.';

export const authState = (state: RootState) => state.auth.loginState;
export const classroomListState = (state: RootState) => state.classroom.listState;

