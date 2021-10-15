import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export type IconType = 'scissors' | 'rock' | 'paper';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input() type: IconType | undefined;

  get outerClass(): object {
    return {
      'border-gray-600': !!this.type,
      'border-transparent': !this.type,
      ...(this.type && { [this.type]: true }),
    };
  }

  get innerClass(): object {
    return {
      'bg-gray-50': !!this.type,
      'border-gray-200': !!this.type,
      'bg-dark': !this.type,
      'border-transparent': !this.type,
    };
  }
}
