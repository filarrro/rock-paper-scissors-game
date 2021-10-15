import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  gameState = this.gameService.getState();

  constructor(private gameService: GameService) {}
}
