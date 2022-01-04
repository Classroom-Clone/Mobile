import { SendGetRequest } from '../AppService';

export const GetMembersList = (token: string, classId: number) =>
    SendGetRequest(
        `http://51.83.134.23/api/classrooms/${classId}/members?perPage=100&page=1`,
        token
    );
