export class Person {
    id: string;
    firstName: string;
    lastName: string;
    dob: Date;
    email: string;
    country: string;
    avatar: File;

    constructor(
        id: string = "",
        firstName: string = "",
        lastName: string = "",
        dob: Date = null,
        email: string = "",
        country: string = "",
        avatar: File = null
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.country = country;
        this.avatar = avatar;
    }
}