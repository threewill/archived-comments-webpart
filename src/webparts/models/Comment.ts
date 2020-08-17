import { IComment } from './IComment';

export class Comment implements IComment {
    public Id: number;
    public Author: string;
    public Date: Date;
    public Body: string;
    public Parent?: number;
    public Children?: Array<IComment>;
}