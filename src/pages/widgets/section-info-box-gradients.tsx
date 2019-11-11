import React from 'react';

import { InfoBoxBackgroundGradient } from '../../widgets';
import { ProgressBar } from '../../ui-elements/general';

export function SectionInfoBoxGradients(): React.ReactElement {
  return (
    <React.Fragment>
      <h5 className="mt-4 mb-2">Info Box With <code>bg-gradient-*</code></h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <InfoBoxBackgroundGradient
            backgroundClassName="info"
            iconName="bookmark"
            text="41,410"
            title="Bookmarks"
          >
            <ProgressBar currentProgress={70} />
            <span className="progress-description">
              70% Increase in 30 Days
            </span>
          </InfoBoxBackgroundGradient>
        </div>
        
        <div className="col-md-3 col-sm-6 col-12">
          <InfoBoxBackgroundGradient
            backgroundClassName="success"
            iconName="thumbs-up"
            text="41,410"
            title="Bookmarks"
          >
            <ProgressBar currentProgress={70} />
            <span className="progress-description">
              70% Increase in 30 Days
            </span>
          </InfoBoxBackgroundGradient>
        </div>
        
        <div className="col-md-3 col-sm-6 col-12">
          <InfoBoxBackgroundGradient
            backgroundClassName="warning"
            iconName="calendar-alt"
            text="41,410"
            title="Bookmarks"
          >
            <ProgressBar currentProgress={70} />
            <span className="progress-description">
              70% Increase in 30 Days
            </span>
          </InfoBoxBackgroundGradient>
        </div>
        
        <div className="col-md-3 col-sm-6 col-12">
          <InfoBoxBackgroundGradient
            backgroundClassName="danger"
            iconName="comments"
            text="41,410"
            title="Bookmarks"
          >
            <ProgressBar currentProgress={70} />
            <span className="progress-description">
              70% Increase in 30 Days
            </span>
          </InfoBoxBackgroundGradient>            
        </div>
      </div>
    </React.Fragment>
  );
}