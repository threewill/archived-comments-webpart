import * as React from 'react';
import styles from './ArchivedComments.module.scss';
import { IArchivedCommentsProps } from './IArchivedCommentsProps';
import { Comment } from '../molecules/Comment/comment';

export default class ArchivedComments extends React.Component<IArchivedCommentsProps, {}> {
  public render(): React.ReactElement<IArchivedCommentsProps> {
    return (
      <div className={ styles.archivedComments }>
        <h3 id="comments">Archived Comments</h3>
        {
          this.props.Comments.map((c) => <Comment key={c.Id} Id={c.Id} Author={c.Author} Date={c.Date} Body={c.Body} Parent={ c.Parent } Children={c.Children} />)
        }
      </div>
    );
  }
}
