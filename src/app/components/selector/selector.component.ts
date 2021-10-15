import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GameService } from '../../game.service';
import { IconType } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent {
  constructor(private gameService: GameService) {}

  select(type: IconType): void {
    this.gameService.select(type);
  }
}
