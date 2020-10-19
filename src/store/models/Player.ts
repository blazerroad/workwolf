import { DefaultEntity } from "../../repository/DefaultEntity"


export class Player extends DefaultEntity {
    firstname?: string;
    lastname?: string;
    birthDate?: Date;
    age?: number;
    number?: string;
    position?: string;

    constructor(firstname?: string, lastname?: string, birthDate?: Date, age?: number, number?: string, position?: string) {
        super();
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
        this.age = age;
        this.number = number;
        this.position = position;
    }
}