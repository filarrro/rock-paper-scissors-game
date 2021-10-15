import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private score$: BehaviorSubject<number>;
  private readonly localStorageProperty: string = 'score';

  constructor() {
    this.score$ = new BehaviorSubject<number>(this.getFromLocalStorage());
  }

  getScore(): Observable<number> {
    return this.score$.asObservable();
  }

  win(): void {
    const score = this.currentScore + 1;
    this.updateScore(score);
  }

  loose(): void {
    const score = Math.max(0, this.currentScore - 1);
    this.updateScore(score);
  }

  private get currentScore(): number {
    return this.score$.getValue();
  }

  private updateScore(score: number): void {
    this.score$.next(score);
    localStorage.setItem(this.localStorageProperty, score.toString());
  }

  private getFromLocalStorage(): number {
    const saved = localStorage.getItem(this.localStorageProperty);
    return saved ? Number.parseInt(saved, 10) : 0;
  }
}
