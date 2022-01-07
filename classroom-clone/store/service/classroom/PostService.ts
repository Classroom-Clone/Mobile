import { SendGetRequest } from '../AppService';
import { API_URL } from '@env';

function prepareUrl(classId: number) {
    return `${API_URL}/classrooms/${classId}/posts?perPage=100&page=1`;
}

export const GetPostsList = (token: string, classId: number) =>
    SendGetRequest(prepareUrl(classId), token);
