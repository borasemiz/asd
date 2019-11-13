import React from 'react';

export interface CardHeaderProps  {
  title: string;
  children?: any;
}

export class CardHeader extends React.Component<CardHeaderProps> {
  public render(): React.ReactElement {
    return (
      <div className="card-header">
        <h3 className="card-title">{ this.props.title }</h3>
        {
          this.props.children &&
          <div className="card-tools">
            { this.props.children }
          </div>
        }
      </div>
    );
  }
}
