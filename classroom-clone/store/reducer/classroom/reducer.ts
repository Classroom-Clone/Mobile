import ActionsEnums from '../../../helpers/enums/ActionEnums';
import classroomInitialState from '../../initialState/classroom/classroomInitialState';
import { IAction } from '../../interface';
import { ClassroomState } from '../../interface/classroom';
import { AssigmentListInterface } from '../../interface/classroom/AssigmentInterface';
import { ClassroomListInterface } from '../../interface/classroom/ClassroomInterface';
import { MembersListInterface } from '../../interface/classroom/MemberInterface';
import { PostListInterface } from '../../interface/classroom/PostInterface';
import { SubmissionsListInterface } from '../../interface/classroom/SubmissionsInterface';

export type ClassroomType =
    | IAction<ActionsEnums.GET_CLASSROOM_LIST, ClassroomListInterface>
    | IAction<ActionsEnums.GET_POSTS_LIST, PostListInterface>
    | IAction<ActionsEnums.GET_ASSIGMENTS_LIST, AssigmentListInterface>
    | IAction<ActionsEnums.GET_SUBMISSIONS_LIST, SubmissionsListInterface>
    | IAction<ActionsEnums.GET_MEMBERS_LIST, MembersListInterface>;
export default function reducerClassroom(
    state: ClassroomState = classroomInitialState,
    action: ClassroomType
): ClassroomState {
    switch (action.type) {
        case ActionsEnums.GET_CLASSROOM_LIST:
            return { ...state, listState: action.payload };
        case ActionsEnums.GET_MEMBERS_LIST:
            return { ...state, membersState: action.payload };
        case ActionsEnums.GET_POSTS_LIST:
            return { ...state, postState: action.payload };
        case ActionsEnums.GET_ASSIGMENTS_LIST:
            return { ...state, assigmentState: action.payload };
        case ActionsEnums.GET_SUBMISSIONS_LIST:
            return { ...state, submissionState: action.payload };
        default:
            return state;
    }
}
