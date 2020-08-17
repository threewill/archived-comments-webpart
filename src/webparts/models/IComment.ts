export interface IComment{
    Id: number;
    Author: string;
    Date: Date;
    Body: string;
    Parent?: number;
    Children?: Array<IComment>;
}