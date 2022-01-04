import { SendGetRequest } from "../AppService";

export const GetPostsList = (token: string, classId: number) =>
    SendGetRequest(`http://51.83.134.23/api/classrooms/${classId}/posts?perPage=100&page=1`, token);