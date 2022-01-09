import { SendGetRequest, SendPostRequest } from '../AppService';
import { API_URL } from '@env';
import { PostModel } from './Models/PostModel';

export const GetPostsList = (token: string, classId: number) =>
    SendGetRequest(`${API_URL}/classrooms/${classId}/posts?perPage=100&page=1`, token);

export const SendPost = (token: string, classId: number, payload: PostModel) =>
    SendPostRequest(`${API_URL}/classrooms/${classId}/posts`, token, payload);
