import { SendGetRequest } from '../AppService';
import { API_URL } from '@env';

const url = `${API_URL}/me/`;

export const GetClassroomList = (token: string) => SendGetRequest(`${url}classrooms`, token);

export const GetOwnedClassroomList = (token: string) =>
    SendGetRequest(`${url}owned-classrooms`, token);
