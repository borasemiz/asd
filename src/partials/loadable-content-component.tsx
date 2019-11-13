import React from 'react';

import { LoadingOverlay } from '../ui-elements/general';

export interface LoadableContentComponentProps {
  isLoading?: boolean;
  renderLoading?: () => React.ReactElement;
}

export abstract class LoadableContentComponent<T extends LoadableContentComponentProps> extends React.Component<T> {
  constructor(props: T) {
    super(props);
  }

  protected renderLoadingOverlay(): React.ReactElement {
    return (
      <React.Fragment>
        {this.props.isLoading && (this.props.renderLoading ? this.props.renderLoading() : <LoadingOverlay />) }
      </React.Fragment>
    );
  }
}
