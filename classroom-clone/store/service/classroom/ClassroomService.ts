import { SendGetRequest, SendPostRequest } from '../AppService';
import { API_URL } from '@env';
import { ClassroomModel } from './Models/ClassroomModel';

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

export const PostClassroom = (token: string, payload: ClassroomModel) =>
    SendPostRequest(`${API_URL}/classrooms`, token, payload);
