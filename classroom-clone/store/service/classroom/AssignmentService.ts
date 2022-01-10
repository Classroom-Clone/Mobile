import { SendGetRequest, SendPostRequest } from '../AppService';
import { API_URL } from '@env';
import { AssignmentModel } from './Models/AssignmentModel';

function prepareUrl(classId: number) {
    return `${API_URL}/classrooms/${classId}/assignments?perPage=100&page=1`;
}

export const GetAssignmentsList = (token: string, classId: number) =>
    SendGetRequest(prepareUrl(classId), token);

export const PostAssignment = (token: string, classId: number, payload: AssignmentModel) =>
    SendPostRequest(`${API_URL}/classrooms/${classId}/assignments`, token, payload);