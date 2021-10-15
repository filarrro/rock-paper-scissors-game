import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  score$ = this.appService.getScore();

  constructor(private appService: AppService) {}
}
