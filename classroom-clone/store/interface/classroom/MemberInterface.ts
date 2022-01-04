import { PaginationInterface } from '../PaginationInterface';

export interface MembersListInterface {
    data: Array<MemberInterface>;
    pagination: PaginationInterface;
}

export interface MemberInterface {
    id: number;
    name: string;
    email: string;
}
