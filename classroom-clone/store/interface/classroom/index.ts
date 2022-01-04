import { AssigmentListInterface } from './AssigmentInterface';
import { ClassroomListInterface } from './ClassroomInterface';
import { MembersListInterface } from './MemberInterface';
import { PostListInterface } from './PostInterface';
import { SubmissionsListInterface } from './SubmissionsInterface';

export interface ClassroomState {
    listState: ClassroomListInterface | null;
    membersState: MembersListInterface | null;
    postState: PostListInterface | null;
    assigmentState: AssigmentListInterface | null;
    submissionState: SubmissionsListInterface | null;
}
