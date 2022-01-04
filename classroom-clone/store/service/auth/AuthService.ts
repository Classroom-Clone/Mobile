import { API_URL } from '@env';
import { AsyncStorage } from 'react-native';
import { SendGetRequest, SendPostRequest } from '../AppService';
import { LoginModel } from './model/LoginModel';

export const PostLogin = (loginModel: LoginModel) =>
    SendPostRequest('http://51.83.134.23/api/auth/login', null, loginModel);
