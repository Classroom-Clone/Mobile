import ActionsEnums from '../../../helpers/enums/ActionEnums';
import { GetAssignmentsList } from '../../service/classroom/AssignmentService';
import {
    GetArchivedClassroomsList,
    GetClassroomList,
    GetOwnedClassroomList
} from '../../service/classroom/ClassroomService';
import { GetMembersList } from '../../service/classroom/MemberService';
import { PostModel } from '../../service/classroom/Models/PostModel';
import { GetPostsList, SendPost } from '../../service/classroom/PostService';
import { GetSubmissionsList } from '../../service/classroom/SubmissionService';

export async function FetchArchivedClassroomList(dispatch: any, token: string, count: number) {
    const result = await GetArchivedClassroomsList(token, count);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_ARCHIVED_CLASSROOM_LIST
    });
}

export async function FetchClassroomList(dispatch: any, token: string) {
    const result = await GetClassroomList(token);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_CLASSROOM_LIST
    });
}

export async function FetchMembersList(dispatch: any, token: string, classId: number) {
    const result = await GetMembersList(token, classId);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_MEMBERS_LIST
    });
}

export async function FetchPostsList(dispatch: any, token: string, classId: number) {
    const result = await GetPostsList(token, classId);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_POSTS_LIST
    });
}

export async function FetchAssignmentsList(dispatch: any, token: string, classId: number) {
    const result = await GetAssignmentsList(token, classId);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_ASSIGNMENTS_LIST
    });
}

export async function FetchSubmissionsList(dispatch: any, token: string, assignmentId: number) {
    const result = await GetSubmissionsList(token, assignmentId);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_SUBMISSIONS_LIST
    });
}

export async function FetchOwnedClassroomList(dispatch: any, token: string) {
    const result = await GetOwnedClassroomList(token);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_OWNED_CLASSROOM_LIST
    });
}

export async function CreatePost(
    dispatch: any,
    token: string,
    classId: number,
    payload: PostModel
) {
    await SendPost(token, classId, payload);
    await FetchPostsList(dispatch, token, classId);
}
