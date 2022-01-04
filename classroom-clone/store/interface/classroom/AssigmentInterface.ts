import { PaginationInterface } from "../PaginationInterface";

export interface AssigmentListInterface {
    data: Array<AssigmentInterface>;
    pagination: PaginationInterface;
}

export interface AssigmentInterface {
    id: number;
    title: string;
    content: string;
    due_date: string;
    created_at: string,
    updated_at: string,
    points: number,
    owner: {
        id: number,
        name: string,
        email: string
    },
    attachments: Array<AttachmentInterface>
}

export interface AttachmentInterface {
    id: number,
    display_name: string,
    url: string
}
