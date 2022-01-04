import { SendGetRequest } from '../AppService';

export const GetClassroomList = (token: string) =>
    SendGetRequest('http://51.83.134.23/api/me/classrooms', token);
