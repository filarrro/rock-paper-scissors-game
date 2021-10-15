import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, HostBinding,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesComponent {
  @Output() closeRules = new EventEmitter<void>();

  constructor() {}

  @HostBinding('class.bg-gray-50') bg = true;

  close(): void {
    this.closeRules.emit();
  }
}
