import * as React from 'react';
import { IComment } from '../../../../models/IComment';
import { CommentDate } from '../../atoms/CommentDate/commentDate';
import { CommentAuthor } from '../../atoms/CommentAuthor/commentAuthor';
import { CommentText } from '../../atoms/CommentText/commentText';
import styles from "./comment.module.scss";
import { format } from "date-fns";

export class Comment extends React.Component<IComment>{
    constructor(props: IComment){
        super(props);
    }

    public render(): React.ReactElement<IComment>{
        const { Id, Author, Date, Body, Children, Parent } = this.props;
        let isReply = !isNaN(Parent);
        let className = isReply ? styles.reply : styles.comment;

        return(
            <div id={Id.toString()} className={className  + " o365-drop-shadow" }>
                <div className = { styles.container }>
                    <p>
                        <CommentAuthor>{ Author }</CommentAuthor>
                        &nbsp;on&nbsp;
                        <CommentDate date={ Date } />
                    </p>
                    <CommentText>{ Body }</CommentText>
                </div>
                { Children != undefined &&
                    Children.map((c) => <Comment key={c.Id} Id={c.Id} Author={c.Author} Date={c.Date} Body={c.Body} Parent={ c.Parent } Children={c.Children} />)
                }
            </div>
        );
    }
}