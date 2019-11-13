import React from 'react';

import { Overlay, OverlayProps } from './overlay';

export interface LoadingOverlayProps extends OverlayProps {
}

export function LoadingOverlay(props: LoadingOverlayProps): React.ReactElement {
  return (
    <Overlay className={props.className}>
      <i className="fas fa-3x fa-sync-alt"></i>
    </Overlay>
  );
}
