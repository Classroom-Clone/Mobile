export class ClassroomModel {
    name!: string;

    description!: string;

    accent_color!: string;

    constructor(name: string, description: string, accent_color: string) {
        this.name = name;
        this.description = description;
        this.accent_color = accent_color;
    }
}
