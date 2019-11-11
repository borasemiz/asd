import React from 'react';

export interface ProgressBarProps {
  /**
   * Current progress of the progress bar.
   */
  currentProgress: number;
  /**
   * Starting point of this progress bar.
   */
  minProgress?: number;
  /**
   * Maximum point of the progress bar.
   */
  maxProgress?: number;
  /**
   * Text to be shown in screen readers
   */
  srOnlyText?: string;
  /**
   * Background class of this progress bar. Can be one of 'success', 'warning', 'info' or 'danger'.
   */
  bgClass?: 'success' | 'warning' | 'info' | 'danger';
}

export class ProgressBar extends React.Component<ProgressBarProps> {
  
  constructor(props: ProgressBarProps) {
    super(props);
  }

  public render(): React.ReactElement {
    return (
      <div className="progress">
        <div
          className={`progress-bar ${this.bgClass}`}
          role="progressbar"
          aria-valuenow={this.props.currentProgress}
          aria-valuemin={this.props.minProgress ? this.props.minProgress : 0}
          aria-valuemax={this.props.maxProgress ? this.props.maxProgress : 100}
          style={{ width: `${this.props.currentProgress}%` }}
        >
          <span className="sr-only">{ this.srOnlyText }</span>
        </div>
      </div>
    );
  }

  private get bgClass(): string {
    return this.props.bgClass ? `bg-${this.props.bgClass}` : '';
  }

  private get srOnlyText(): string {
    return this.props.srOnlyText ? this.srOnlyText : '';
  }
}
