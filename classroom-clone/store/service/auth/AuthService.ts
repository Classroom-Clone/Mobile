import { API_URL } from '@env';
import { SendGetRequest, SendPostRequest } from '../AppService';
import { LoginModel } from './model/LoginModel';
import { RegisterModel } from './model/RegisterModel';

const url = `${API_URL}/auth`;

export const PostLogin = (loginModel: LoginModel) =>
    SendPostRequest(`${url}/login`, null, loginModel);

export const PostRegister = (registerModel: RegisterModel) =>
    SendPostRequest(`${url}/register`, null, registerModel);
