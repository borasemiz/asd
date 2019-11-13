import React from 'react';

export interface OverlayProps {
  className?: string;
  children?: any;
}

export function Overlay(props: OverlayProps): React.ReactElement {
  return (
    <div className={`overlay ${props.className}`}>
      { props.children }
    </div>
  );
}
