import { Inertia } from "@inertiajs/inertia";

export type StudentDB = {
    id: number,
    firstName: string,
    secondName: string,
    phone: string,
    birthday: string,
    gender: string,
    country: string,
    firstLanguage: string,
    secondLanguage: string,
    level: string,
    score:number|null,
    user: {
        id: number,
        email: string,
        active: number,
    }
}

export class Student {
    public key: number;
    public id: number;
    public userId: number;
    public email: string;
    public firstName: string;
    public secondName: string;
    public phone: string;
    public birthday: string;
    public gender: string;
    public country: string;
    public firstLanguage: string;
    public secondLanguage: string;
    public level: string;
    public active: number;
    public activationControl: any;
    public score: number|null;
    constructor(student: StudentDB) {
        this.id = this.key = student.id;
        this.firstName = student.firstName;
        this.secondName = student.secondName;
        this.phone = student.phone;
        this.birthday = student.birthday;
        this.gender = student.gender;
        this.country = student.country;
        this.firstLanguage = student.firstLanguage;
        this.secondLanguage = student.secondLanguage;
        this.score = student.score;
        this.level = student.level;
        this.userId = student.user.id;
        this.email = student.user.email;
        this.active = student.user.active;
        this.activationControl = { active: this.active, activate: this.activate, deactivate: this.deactivate }
    }
    activate() {
        Inertia.get(`/activate-user/${this.userId}`, undefined, {
            preserveScroll: true,
        })
    }
    deactivate() {
        Inertia.get(`/deactivate-user/${this.userId}`, undefined, {
            preserveScroll: true,
        })
    }
    description() {
        return `First Language:${this.firstLanguage} , Second Language: ${this.secondLanguage} , Gender: ${this.gender} , Birthday: ${this.birthday}`
    }
}
