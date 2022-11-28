export interface IPage<T extends IEntity> {
    content: T[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    size: number;
    empty: boolean;

}

export interface IEntity {
    id: number;
}