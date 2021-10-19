import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { fade } from '../../animations/fade';

export type IconType = 'scissors' | 'rock' | 'paper';
export type IconSize = 'md' | 'lg';

const ripple = trigger('ripple', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'scale3d(0, 0, 0)' }),
        stagger(100, [
          animate(
            '0.8s ease-out',
            style({ opacity: 1, transform: 'scale3d(1, 1, 1)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fade, ripple],
})
export class IconButtonComponent {
  @Input() type: IconType | undefined;
  @Input() showRipple = false;
  @Input() size: IconSize = 'md';

  get outerClass(): object {
    return {
      'border-bottom-color': !!this.type,
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

  @HostBinding('class')
  get sizeClass(): string {
    return `size-${this.size}`;
  }

  get items(): any[] {
    return this.showRipple ? [3, 2, 1] : [];
  }
}
