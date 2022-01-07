import { API_URL } from '@env';
import { SendGetRequest, SendPostRequest } from '../AppService';
import { LoginModel } from './model/LoginModel';

const url = `${API_URL}/auth/login`;

export const PostLogin = (loginModel: LoginModel) => SendPostRequest(url, null, loginModel);
