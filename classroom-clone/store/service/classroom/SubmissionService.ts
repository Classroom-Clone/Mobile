import { SendGetRequest } from "../AppService";

export const GetSubmissionsList = (token: string, assigmentId: number) =>
    SendGetRequest(`http://51.83.134.23/api/assignments/${assigmentId}/submissions?perPage=100&page=1`, token);