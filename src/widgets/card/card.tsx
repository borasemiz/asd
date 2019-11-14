import React from 'react';

import { LoadableContentComponent, LoadableContentComponentProps } from '../../partials';
import { CardHeader } from './card-header';
import { CardBody } from './card-body';

export interface CardProps extends LoadableContentComponentProps {
  headerTitle: string;
  headerTools?: () => React.ReactElement;
  className?: string;
  fullScreen?: boolean;
}

export class Card extends LoadableContentComponent<React.PropsWithChildren<CardProps>> {
  public render(): React.ReactElement {
    return (
      <div className={`card ${this.props.className || ''} ${this.props.fullScreen ? 'maximized-card' : ''}`}>
        <CardHeader title={this.props.headerTitle}>
          { !!this.props.headerTools && this.props.headerTools() }
        </CardHeader>
        <CardBody>
          { this.props.children }
        </CardBody>
        { this.renderLoadingOverlay() }
      </div>
    );
  }
}
