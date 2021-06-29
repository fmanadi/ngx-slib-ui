import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'sl-progress-bar',
  template: `<div class="bar" [style.width.%]="value"></div>`,
  styleUrls: ['./progress-bar.scss'],
})
export class SlProgressBar {
  /** Current value of the progressbar. */
  @Input() value = 0;

  @HostBinding('attr.role') role = 'progressbar';
  @HostBinding('attr.aria-valuemin') valueMin = '0';
  @HostBinding('attr.aria-valuemax') valueMax = '100';
  @HostBinding('attr.aria-valuenow') valueNow = this.value;
}
