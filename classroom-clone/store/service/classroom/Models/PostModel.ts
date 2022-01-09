export class PostModel {
    title!: string;
    content!: string;
    attachments!: Array<string>;

    constructor(title: string, content: string, attachments: Array<string>) {
        this.title = title;
        this.content = content;
        this.attachments = attachments;
    }
}
