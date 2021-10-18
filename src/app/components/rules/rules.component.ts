import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
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

  @HostListener('document:keydown.escape')
  close(): void {
    this.closeRules.emit();
  }
}
