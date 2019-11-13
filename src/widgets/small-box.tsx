import React from 'react';

import { BootstrapTheme } from '../types';
import { LoadableContentComponent, LoadableContentComponentProps } from '../partials';

export interface SmallBoxProps extends LoadableContentComponentProps {
  title: string;
  value: string;
  linkText: string;
  backgroundClassName: BootstrapTheme;
  renderIcon: () => React.ReactElement;
  children?: any;
}

export class SmallBox extends LoadableContentComponent<SmallBoxProps> {
  constructor(props: SmallBoxProps) {
    super(props);
  }

  public render(): React.ReactElement {
    return (
      <div className={`small-box bg-${this.props.backgroundClassName}`}>
        { this.renderLoadingOverlay() }
        <div className="inner">
          <h3>{this.props.value}</h3>
          <p>{this.props.title}</p>
        </div>
        <div className="icon">
          { this.props.renderIcon() }
        </div>
        <a href="#" className="small-box-footer">
          {this.props.linkText} <i className="fas fa-arrow-circle-right"></i>
        </a>
        { this.props.children }
      </div>
    );
  }
}
