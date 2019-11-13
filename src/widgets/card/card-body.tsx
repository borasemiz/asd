import React from 'react';

export const CardBody: React.FunctionComponent = ({ children }) => {
  return (
    <div className="card-body">
      { children }
    </div>
  );
}
