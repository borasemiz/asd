import React from 'react';

import { Card, CardProps } from './card';

interface MaximizableCardState {
  isCardMaximized: boolean;
}

export function makeMaximizableCard(WrappedCard: React.ComponentType<CardProps>) {
  return class extends React.Component<CardProps, MaximizableCardState> {
    constructor(props: CardProps) {
      super(props);
      this.state = {
        isCardMaximized: false
      };
    }

    public render(): React.ReactElement {
      return (
        <WrappedCard
          { ...this.props }
          headerTools={ () => this.renderToggleButton() }
          fullScreen={this.state.isCardMaximized}
        />
      );
    }

    private renderToggleButton(): React.ReactElement {
      return (
        <button
          onClick={this.toggleCardFullscreen.bind(this)}
          type="button"
          className="btn btn-tool"
          data-card-widget="maximize"
        >
          <i className="fas fa-expand"></i>
        </button>
      );
    }

    private toggleCardFullscreen(): void {
      this.setState({
        isCardMaximized: !this.state.isCardMaximized
      });
    }
  };
}

export const MaximizableCard = makeMaximizableCard(Card);
