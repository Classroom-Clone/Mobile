import { SendGetRequest, SendPostRequest } from '../AppService';
import { API_URL } from '@env';

const url = `${API_URL}/me/`;

export const GetClassroomList = (token: string) => SendGetRequest(`${url}classrooms`, token);

export const GetOwnedClassroomList = (token: string) =>
    SendGetRequest(`${url}owned-classrooms`, token);

export const GetArchivedClassroomsList = (token: string, count: number | 100) =>
    SendGetRequest(`${url}owned-classrooms?perPage=${count}`, token);

export const JoinToClassroom = (token: string, joinCode: string) =>
    SendPostRequest(`${API_URL}/me/classrooms/join`, token, {
        join_code: joinCode
    });
