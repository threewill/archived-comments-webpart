import * as React from 'react';
import { format } from "date-fns";
import styles from "./styles.module.scss";

interface ICommentDateProps{
    date: Date;
}

export class CommentDate extends React.Component<ICommentDateProps>{
    constructor(props: ICommentDateProps){
        super(props);
    }

    public render(): React.ReactElement<ICommentDateProps>{
        const { date } = this.props;

        return(
            <span className={styles.date}>{ format( date, 'MMMM dd, yyyy h:mm a')}</span>
        );
    }
}