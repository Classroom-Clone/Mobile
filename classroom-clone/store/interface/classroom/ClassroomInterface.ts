import { PaginationInterface } from '../PaginationInterface';

export interface ClassroomListInterface {
    data: Array<ClassroomInterface>;
    pagination: PaginationInterface;
}

export interface ClassroomInterface {
    id: number;
    name: string;
    description: string;
    color: string;
    allow_join: boolean;
    join_code: string;
    is_archived: boolean;
    created_at: string;
    updated_at: string;
}
