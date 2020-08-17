import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'ArchivedCommentsWebPartStrings';
import { IArchivedCommentsSimpleProps } from './components/organisms/SimpleComments/IArchivedCommentsSimpleProps';
import ArchivedCommentsSimple from './components/organisms/SimpleComments/ArchivedCommentsSimple';
import html from '../../sample-data/comments.html';

// import { IArchivedCommentsProps } from './components/organisms/IArchivedCommentsProps';
// import ArchivedComments from './components/organisms/ArchivedComments';

// import { IComment } from '../models/IComment';
// import { Comment } from '../models/Comment';

export default class ArchivedCommentsWebPart extends BaseClientSideWebPart<IArchivedCommentsSimpleProps> {
  public render(): void {
    const element: React.ReactElement<IArchivedCommentsSimpleProps> = React.createElement(
      ArchivedCommentsSimple,
      {
        html: Environment.type === EnvironmentType.Local ? html : this.properties.html  
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
