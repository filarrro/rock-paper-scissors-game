import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProgressComponent } from './game-progress.component';

describe('GameProgressComponent', () => {
  let component: GameProgressComponent;
  let fixture: ComponentFixture<GameProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
