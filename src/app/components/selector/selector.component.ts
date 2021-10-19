import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameService } from '../../game.service';
import { IconType } from '../icon-button/icon-button.component';

const enter = trigger('enter', [
  transition('void => *', [
    query('button', [style({ opacity: 0 })], { optional: true }),
    query(
      '.triangle',
      [style({ opacity: 0 }), animate('0.25s ease-out', style({ opacity: 1 }))],
      { optional: true }
    ),
    query(
      'button',
      [
        stagger(120, [
          animate('0.35s ease-out', style({ opacity: 1 })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enter],
})
export class SelectorComponent {
  constructor(private gameService: GameService) {}

  select(type: IconType): void {
    this.gameService.select(type);
  }
}
