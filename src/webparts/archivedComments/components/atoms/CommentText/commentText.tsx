import * as React from 'react';
import styles from "./styles.module.scss";

interface ICommentTextProps{
}

export class CommentText extends React.Component<ICommentTextProps>{
    constructor(props: ICommentTextProps){
        super(props);
    }

    public render(): React.ReactElement<ICommentTextProps>{
        return(
            <p>
                {this.props.children}
            </p>
        );
    }
}