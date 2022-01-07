import { SendGetRequest } from '../AppService';
import { API_URL } from '@env';

const url = `${API_URL}/me/classrooms`;

export const GetClassroomList = (token: string) => SendGetRequest(url, token);
