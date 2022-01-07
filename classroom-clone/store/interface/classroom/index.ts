import { AssignmentListInterface } from './AssignmentInterface';
import { ClassroomListInterface } from './ClassroomInterface';
import { MembersListInterface } from './MemberInterface';
import { PostListInterface } from './PostInterface';
import { SubmissionsListInterface } from './SubmissionsInterface';

export interface ClassroomState {
    listState: ClassroomListInterface | null;
    membersState: MembersListInterface | null;
    postState: PostListInterface | null;
    assignmentState: AssignmentListInterface | null;
    submissionState: SubmissionsListInterface | null;
}
