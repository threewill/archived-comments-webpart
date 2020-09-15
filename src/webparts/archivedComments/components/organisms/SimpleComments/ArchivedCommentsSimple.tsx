import * as React from 'react';
import { IArchivedCommentsSimpleProps } from './IArchivedCommentsSimpleProps';
import styles from '../ArchivedComments.module.scss';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import './component.css';
import 'images/caret-down.svg';
import 'images/caret-up.svg';

export default class ArchivedComments extends React.Component<IArchivedCommentsSimpleProps, {}> {
  public render(): React.ReactElement<IArchivedCommentsSimpleProps> {
    return (
      <div>
        <hr style={{ color: "#EDEDED" }} />      
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
          <AccordionItemButton>
            Migrated Comments
          </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div id="archivedComments" className={styles.archivedComments} dangerouslySetInnerHTML={ { __html: this.props.html }} />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <hr style={{ color: "#EDEDED" }} />
      </div>      
    );
  }
}
