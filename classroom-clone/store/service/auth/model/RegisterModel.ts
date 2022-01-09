export class RegisterModel {
    email!: string;
    first_name!: string;
    last_name!: string;
    password!: string;
    password_confirmation!: string;

    constructor(
        email: string,
        first_name: string,
        last_name: string,
        password: string,
        password_confirmation: string
    ) {
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.password_confirmation = password_confirmation;
    }
}
