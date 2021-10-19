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
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import { fade } from '../../animations/fade';

const enter = trigger('enter', [
  transition(':enter', [
    query(':scope > *', [style({ opacity: 0 })], {
      optional: true,
    }),
    style({
      opacity: 0,
      transform: 'translateY(10%)',
    }),
    animate('0.35s ease-out', style({ opacity: 1, transform: 'none' })),
    query(
      ':scope > *',
      [
        stagger(150, [
          style({ opacity: 0 }),
          animate('0.25s ease-out', style({ opacity: 1 })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enter, fade],
})
export class RulesComponent {
  @Output() closeRules = new EventEmitter<void>();

  constructor() {}

  @HostListener('document:keydown.escape')
  close(): void {
    this.closeRules.emit();
  }
}
