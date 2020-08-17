import * as React from 'react';
import styles from "./styles.module.scss";

interface ICommentAuthorProps{
}

export class CommentAuthor extends React.Component<ICommentAuthorProps>{
    constructor(props: ICommentAuthorProps){
        super(props);
    }

    public render(): React.ReactElement<ICommentAuthorProps>{
        return(
            <b>
                {this.props.children}
            </b>
        );
    }
}