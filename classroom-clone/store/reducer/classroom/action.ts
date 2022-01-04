import ActionsEnums from '../../../helpers/enums/ActionEnums';
import { GetAssigmentsList } from '../../service/classroom/AssigmentService';
import { GetClassroomList } from '../../service/classroom/ClassroomService';
import { GetMembersList } from '../../service/classroom/MemberService';
import { GetPostsList } from '../../service/classroom/PostService';
import { GetSubmissionsList } from '../../service/classroom/SubmissionService';

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
    console.log(result);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_POSTS_LIST
    });
}

export async function FetchAssigmentsList(dispatch: any, token: string, classId: number) {
    const result = await GetAssigmentsList(token, classId);
    console.log(result);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_ASSIGMENTS_LIST
    });
}

export async function FetchSubmissionsList(dispatch: any, token: string, assigmentId: number) {
    const result = await GetSubmissionsList(token, assigmentId);
    console.log(result);

    dispatch({
        payload: result,
        type: ActionsEnums.GET_SUBMISSIONS_LIST
    });
}
