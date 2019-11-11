import React from 'react';

export const ProgressBar = (): React.ReactElement => (
  <div className="progress">
    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%' }}>
      <span className="sr-only">40% Complete (success)</span>
    </div>
  </div>
);
