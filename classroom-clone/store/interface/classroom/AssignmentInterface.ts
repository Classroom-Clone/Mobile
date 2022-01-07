import { PaginationInterface } from '../PaginationInterface';

export interface AssignmentListInterface {
    data: Array<AssignmentInterface>;
    pagination: PaginationInterface;
}

export interface AssignmentInterface {
    id: number;
    title: string;
    content: string;
    due_date: string;
    created_at: string;
    updated_at: string;
    points: number;
    owner: {
        id: number;
        name: string;
        email: string;
    };
    attachments: Array<AttachmentInterface>;
}

export interface AttachmentInterface {
    id: number;
    display_name: string;
    url: string;
}
