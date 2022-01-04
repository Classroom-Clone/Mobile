import { PaginationInterface } from '../PaginationInterface';

export interface PostListInterface {
    data: Array<PostInterface>;
    pagination: PaginationInterface;
}

export interface PostInterface {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    owner: {
        id: number;
        name: string;
        email: string;
    };
    links: Array<LinkInterface>;
    attachments: Array<AttachmentInterface>;
}

export interface LinkInterface {
    name: string;
    url: string;
}

export interface AttachmentInterface {
    id: number;
    display_name: string;
    url: string;
}
