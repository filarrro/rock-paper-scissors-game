import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppService } from '../../app.service';

const enter = trigger('enter', [
  transition('void => *', [
    style({ opacity: 0, transform: 'translateY(-120%)' }),
    animate('0.25s 0.6s ease-out', style({ opacity: 1, transform: 'none' })),
  ]),
]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enter],
})
export class HeaderComponent {
  score$ = this.appService.getScore();

  constructor(private appService: AppService) {}
}
