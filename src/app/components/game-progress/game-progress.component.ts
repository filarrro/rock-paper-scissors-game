import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fade } from '../../animations/fade';
import { GameService, State } from '../../game.service';
import { IconType } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fade],
})
export class GameProgressComponent {
  @Input() state!: State | null | undefined;

  constructor(private gameService: GameService) {}

  get userIconType(): IconType | undefined {
    if (this.state?.state !== 'initial') {
      return this.state?.iconType;
    }
    return undefined;
  }

  get aiIconType(): IconType | undefined {
    if (
      this.state?.state === 'bothSelected' ||
      this.state?.state === 'result'
    ) {
      return this.state?.aiIconType;
    }
    return undefined;
  }

  get isResultShown(): boolean {
    return this.state?.state === 'result';
  }

  get result(): string {
    return this.state?.state === 'result' ? this.state.result : '';
  }

  playAgain(): void {
    this.gameService.playAgain();
  }
}
