import ActionsEnums from "../../../helpers/enums/ActionEnums";
import { GetClassroomList } from "../../service/classroom/ClassroomService";

export async function FetchClassroomList(dispatch: any, token: string) {
    const result = await GetClassroomList(token);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_CLASSROOM_LIST,
    });
}