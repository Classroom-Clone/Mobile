import ActionsEnums from '../../../helpers/enums/ActionEnums';
import { PostLogin, PostRegister } from '../../service/auth/AuthService';
import { LoginModel } from '../../service/auth/model/LoginModel';
import { RegisterModel } from '../../service/auth/model/RegisterModel';

export async function FetchLogin(dispatch: any, loginModel: LoginModel) {
    const result = await PostLogin(loginModel);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_TOKEN
    });
}

export async function Register(dispatch: any, registerModel: RegisterModel) {
    const result = await PostRegister(registerModel);
    dispatch({
        payload: result,
        type: ActionsEnums.GET_TOKEN
    });
}
