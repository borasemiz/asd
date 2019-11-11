import React from 'react';

import { InfoBoxBackground, InfoBoxBackgroundProps } from './info-box-background';
import { ProgressBar, ProgressBarProps } from '../ui-elements/general';

export interface InfoBoxProgressProps extends InfoBoxBackgroundProps, ProgressBarProps {
  progressDescription: string;
};

export const InfoBoxProgress = (props: InfoBoxProgressProps): React.ReactElement => (
  <InfoBoxBackground
    iconName={props.iconName}
    backgroundClassName={props.backgroundClassName}
    text={props.text}
    title={props.title}
  >
    <ProgressBar currentProgress={props.currentProgress} />
    <span className="progress-description">
      { props.progressDescription }
    </span>
  </InfoBoxBackground>
);
