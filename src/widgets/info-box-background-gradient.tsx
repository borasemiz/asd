import React from 'react';

import { InfoBoxBackgroundProps, InfoBoxBackground } from './info-box-background';

export function InfoBoxBackgroundGradient(props: InfoBoxBackgroundProps): React.ReactElement {
  return (
    <InfoBoxBackground
      backgroundClassName={`gradient-${props.backgroundClassName}`}
      iconName={props.iconName}
      text={props.text}
      title={props.title}
    >
      {props.children}
    </InfoBoxBackground>
  );
}