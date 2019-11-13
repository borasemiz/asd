import React from 'react';

import { LoadableContentComponent, LoadableContentComponentProps } from '../../partials';
import { CardHeader } from './card-header';
import { CardBody } from './card-body';

export interface CardProps extends LoadableContentComponentProps {
  headerTitle: string;
  className?: string;
  headerTools: React.ReactElement;
}

export class Card extends LoadableContentComponent<React.PropsWithChildren<CardProps>> {
  public render(): React.ReactElement {
    return (
      <div className={`card ${this.props.className}`}>
        <CardHeader title={this.props.headerTitle}>
          { this.props.headerTools }
        </CardHeader>
        <CardBody>
          { this.props.children }
        </CardBody>
        { this.renderLoadingOverlay() }
      </div>
    );
  }
}
