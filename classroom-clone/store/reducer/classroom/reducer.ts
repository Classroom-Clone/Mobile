import ActionsEnums from "../../../helpers/enums/ActionEnums";
import classroomInitialState from "../../initialState/classroom/classroomInitialState";
import { IAction } from "../../interface";
import { ClassroomState } from "../../interface/classroom";
import { ClassroomListInterface } from "../../interface/classroom/ClassroomInterface";

export type AuthType =
    | IAction<ActionsEnums.GET_CLASSROOM_LIST, ClassroomListInterface>
export default function reducerClassroom(
    state: ClassroomState = classroomInitialState,
    action: AuthType,
): ClassroomState {
    switch (action.type) {
        case ActionsEnums.GET_CLASSROOM_LIST:
            return { ...state, listState: action.payload };
        default:
            return state;
    }
}