import { PaginationInterface } from "../PaginationInterface";
import { MemberInterface } from "./MemberInterface";

export interface SubmissionsListInterface {
    data: Array<SubmissionInterface>;
    pagination: PaginationInterface;
}

export interface SubmissionInterface {
    id: number;
    state: string;
    created_at: string,
    updated_at: string,
    points: number,
    user: MemberInterface,
    attachments: Array<AttachmentInterface>
}

export interface AttachmentInterface {
    id: number,
    display_name: string,
    url: string
}
