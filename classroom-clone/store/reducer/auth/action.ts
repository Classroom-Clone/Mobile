import { AsyncStorage } from 'react-native';
import ActionsEnums from '../../../helpers/enums/ActionEnums';
import { PostLogin } from '../../service/auth/AuthService';
import { LoginModel } from '../../service/auth/model/LoginModel';

export async function FetchLogin(dispatch: any, loginModel: LoginModel) {
    const result = await PostLogin(loginModel);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_TOKEN
    });
}
