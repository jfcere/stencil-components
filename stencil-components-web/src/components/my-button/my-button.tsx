import { Component, Event, h, Prop, EventEmitter } from '@stencil/core';

export type ButtonColor = 'default' | 'primary' | 'accent';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss'
})
export class MyButton {

  /**
   * The button color
   */
  @Prop()
  color: ButtonColor = 'default';

  /**
   * To disable button
   */
  @Prop()
  disabled: boolean = false;

  /**
   * Emitted when button is clicked
   */
  @Event()
  onClick: EventEmitter<void>;

  render() {
    return (
      <button
        class={this.color}
        disabled={this.disabled}
        onClick={() => this.onClick.emit()}
      >
        <slot />
      </button>
    );
  }
}
