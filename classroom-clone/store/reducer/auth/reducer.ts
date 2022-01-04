import ActionsEnums from '../../../helpers/enums/ActionEnums';
import authInitialState from '../../initialState/auth/authInitialState';
import { IAction } from '../../interface';
import { AuthState } from '../../interface/auth';
import { LoginInterface } from '../../interface/auth/LoginInterface';

export type AuthType = IAction<ActionsEnums.GET_TOKEN, LoginInterface>;
export default function reducerAuth(
    state: AuthState = authInitialState,
    action: AuthType
): AuthState {
    switch (action.type) {
        case ActionsEnums.GET_TOKEN:
            return { ...state, loginState: action.payload };
        default:
            return state;
    }
}
