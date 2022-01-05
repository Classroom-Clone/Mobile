import { PaginationInterface } from '../PaginationInterface';

export interface CommentsListInterface {
    data: Array<CommentInterface>;
    pagination: PaginationInterface;
}

export interface CommentInterface {
    id: number;
    content: string;
    is_edited: boolean;
    created_at: string;
    updated_at: string;
    author: {
        id: number;
        name: string;
        email: string;
    };
}
