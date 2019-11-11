import React from 'react';

import { InfoBoxProgress } from '../../widgets/info-box-progress';

export function SectionInfoBoxBg(): React.ReactElement {
  return (
    <React.Fragment>
      <h5 className="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <InfoBoxProgress
            iconName="bookmark"
            backgroundClassName="info"
            text="41,410"
            title="Bookmarks"
            currentProgress={70}
            progressDescription="70% Increase in 30 Days"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <InfoBoxProgress
            iconName="thumbs-up"
            backgroundClassName="success"
            text="41,410"
            title="Bookmarks"
            currentProgress={70}
            progressDescription="70% Increase in 30 Days"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <InfoBoxProgress
            iconName="calendar-alt"
            backgroundClassName="warning"
            text="41,410"
            title="Bookmarks"
            currentProgress={70}
            progressDescription="70% Increase in 30 Days"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <InfoBoxProgress
            iconName="comments"
            backgroundClassName="danger"
            text="41,410"
            title="Bookmarks"
            currentProgress={70}
            progressDescription="70% Increase in 30 Days"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
