import React from 'react';

export interface InfoBoxPropsBase {
  /**
   * Font awesome icon name.
   */
  iconName: string;
  /**
   * Box title.
   */
  title: string;
  /**
   * Text to be shown.
   */
  text: string;
  /**
   * Childrend of this box
   */
  children?: any
}

export interface InfoBoxProps extends InfoBoxPropsBase {
  /**
   * Background class name of the icon. Can be one of 'info', 'success', 'warning' and 'danger'.
   */
  iconBackgroundClassName: string;
};

export const InfoBox = (props: InfoBoxProps): React.ReactElement => (
  <div className="info-box">
    <span className={ `info-box-icon bg-${props.iconBackgroundClassName}` }>
      <i className={ `far fa-${props.iconName}` }></i>
    </span>
    <div className="info-box-content">
      <span className="info-box-text">{ props.title }</span>
      <span className="info-box-number">{ props.text }</span>
    </div>
  </div>
);
