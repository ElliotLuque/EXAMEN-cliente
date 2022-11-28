import { FormControl } from "@angular/forms";
import { IEntity } from "./generics-model";

export interface IUser extends IEntity {
    name: string;
    surname: string;
    lastname: string;
    email: string;
    username: string;
}

export interface IUser2Send {
    id:          number;
    name:        string;
    surname:     string;
    lastname:    string;
    email:       string;
    username:    string;
}

export interface IUser2Form {
    id:          FormControl<number>;
    name:        FormControl<string>;
    surname:     FormControl<string>;
    lastname:    FormControl<string>;
    email:       FormControl<string>;
    username:    FormControl<string>;
}