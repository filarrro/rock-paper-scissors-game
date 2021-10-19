import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger('fade', [
  transition(
    ':enter',
    [
      style({ opacity: 0 }),
      animate('0.2s {{delay}} ease-out', style({ opacity: 1 })),
    ],
    { params: { delay: '0s' } }
  ),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.17s ease-out', style({ opacity: 0 })),
  ]),
]);
