import { trigger, transition, style, animate, state, animation, useAnimation } from '@angular/animations';

export const openVertical = trigger('openVertical', [
 transition(':enter', [
  style({ height: '0px', overflow: 'hidden', visibility: 'hidden' }),
  animate('1000ms 0s', style({ height: '*', visibility: 'visible' }))
 ]),
 transition(':leave', [
  animate('300ms 0s', style({ height: '0px', visibility: 'hidden' }))
 ])
]);
