import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from './app.service';
import { IconType } from './components/icon-button/icon-button.component';

interface InitialState {
  state: 'initial';
}
interface UserSelectedState {
  state: 'userSelected';
  iconType: IconType;
}
interface BothSelectedState {
  state: 'bothSelected';
  iconType: IconType;
  aiIconType: IconType;
}
interface ResultState {
  state: 'result';
  iconType: IconType;
  aiIconType: IconType;
  result: GameResult;
}

export type State = InitialState | UserSelectedState | BothSelectedState | ResultState;
type GameResult = 'win' | 'loose' | 'tie';
const MOVES = ['scissors', 'rock', 'paper'] as const;

// Paper beats Rock
// Rock beats Scissors
// Scissors beats Paper
const GAME_RESULTS: Record<IconType, Record<IconType, GameResult>> = {
  paper: {
    paper: 'tie',
    rock: 'win',
    scissors: 'loose',
  },
  rock: {
    paper: 'loose',
    rock: 'tie',
    scissors: 'win',
  },
  scissors: {
    paper: 'win',
    rock: 'loose',
    scissors: 'tie',
  },
};

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private state: BehaviorSubject<State> = new BehaviorSubject({
    state: 'initial',
  } as State);

  constructor(private appService: AppService) {}

  getState(): Observable<State> {
    return this.state.asObservable();
  }

  select(iconType: IconType): void {
    if (this.currentState.state !== 'initial') {
      return;
    }
    const nextState: UserSelectedState = {
      state: 'userSelected',
      iconType,
    };
    this.state.next(nextState);

    setTimeout(() => {
      this.selectAI();
    }, 700);
  }

  playAgain(): void {
    this.state.next({ state: 'initial' });
  }

  private selectAI(): void {
    if (this.currentState.state !== 'userSelected') {
      return;
    }
    const nextState: BothSelectedState = {
      state: 'bothSelected',
      iconType: this.currentState.iconType,
      aiIconType: this.getRandomSelection(),
    };
    this.state.next(nextState);
    setTimeout(() => {
      this.goToResult();
    }, 100);
  }

  private get currentState(): State {
    return this.state.getValue();
  }

  private getRandomSelection(): IconType {
    const max = MOVES.length - 1;
    const min = 0;
    return MOVES[Math.floor(Math.random() * (max - min + 1)) + min] ?? MOVES[0];
  }

  private goToResult(): void {
    if (this.currentState.state !== 'bothSelected') {
      return;
    }
    const nextState: ResultState = {
      state: 'result',
      iconType: this.currentState.iconType,
      aiIconType: this.currentState.aiIconType,
      result: this.getResult(
        this.currentState.iconType,
        this.currentState.aiIconType
      ),
    };
    this.state.next(nextState);
  }

  private getResult(userIconType: IconType, aiIconType: IconType): GameResult {
    const result = GAME_RESULTS[userIconType][aiIconType];

    switch (result) {
      case 'win':
        this.appService.win();
        break;
      case 'loose':
        this.appService.loose();
        break;
      case 'tie':
        break;
      default:
        throw new Error('Invalid game state');
    }

    return result;
  }
}
