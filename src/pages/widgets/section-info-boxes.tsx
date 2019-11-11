import React from 'react';

import { InfoBox } from '../../widgets';

export const SectionInfoBoxes = (): React.ReactElement => (
  <React.Fragment>
    <h5 className="mb-2">Info Box</h5>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-12">
        <InfoBox
          iconBackgroundClassName="info"
          iconName="envelope"
          text="1,410"
          title="Messages"
        />
      </div>
      
      <div className="col-md-3 col-sm-6 col-12">
        <InfoBox
          iconBackgroundClassName="success"
          iconName="flag"
          text="410"
          title="Bookmarks"
        />
      </div>
      
      <div className="col-md-3 col-sm-6 col-12">
        <InfoBox
          iconBackgroundClassName="warning"
          iconName="copy"
          text="13,648"
          title="Uploads"
        />
      </div>
      
      <div className="col-md-3 col-sm-6 col-12">
        <InfoBox
          iconBackgroundClassName="danger"
          iconName="star"
          text="93,139"
          title="Likes"
        />
      </div>
    </div>
  </React.Fragment>
);
