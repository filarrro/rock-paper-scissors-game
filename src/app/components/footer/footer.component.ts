import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

const enter = trigger('enter', [
  transition('void => *', [
    style({ opacity: 0, transform: 'translateY(120%)' }),
    animate('0.25s 0.85s ease-out', style({ opacity: 1, transform: 'none' })),
  ]),
]);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enter],
})
export class FooterComponent {
  @Output() showRules = new EventEmitter<void>();

  constructor() {}

  openRules(): void {
    this.showRules.emit();
  }
}
