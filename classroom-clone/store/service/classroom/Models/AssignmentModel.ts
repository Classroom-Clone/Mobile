export class AssignmentModel {
    title!: string;

    content!: string;

    points!: number;

    due_date!: string;

    constructor(title: string, content: string, points: number, due_date: string) {
        this.title = title;
        this.content = content;
        this.points = points;
        this.due_date = due_date;
    }
}
