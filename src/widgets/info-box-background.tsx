import React from 'react';

import { InfoBoxPropsBase } from './info-box';

export interface InfoBoxBackgroundProps extends InfoBoxPropsBase {
  /**
   * Background class name of the box. It can be one of 'info', 'success', 'warning' or 'danger'.
   */
  backgroundClassName: string;
}


export function InfoBoxBackground(props: InfoBoxBackgroundProps): React.ReactElement {
  return (
    <div className={ `info-box bg-${props.backgroundClassName}` }>
      <span className="info-box-icon">
        <i className={ `far fa-${props.iconName}` }></i>
      </span>

      <div className="info-box-content">
        <span className="info-box-text">{ props.title }</span>
        <span className="info-box-number">{ props.text }</span>
        {props.children}
      </div>
    </div>
  );
};