import { FormControl } from "@angular/forms";
import { IEntity } from "./generics-model";
import { IUser } from "./user-model";

export interface IPost extends IEntity {
    title: string;
    body: string;
    labels: string;
    visible: boolean;
    datetime: Date;
    user: IUser
}

export interface IPost2Send{
    id: number;
    title: string;
    body: string;
    labels: string;
    visible: boolean;
    datetime: Date;
    user: IEntity;
}

export interface IPost2Form {
    id:             FormControl<number>;
    title:          FormControl<string>;
    body:           FormControl<string>;
    labels:         FormControl<string>;
    visible:        FormControl<boolean>;
    datetime:       FormControl<Date>;
    user:           FormControl<number>;
}