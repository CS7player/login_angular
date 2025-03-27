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

export const openHorizontal = trigger('openHorizontal', [
 transition(':enter', [
  style({ width: '0px', overflow: 'hidden', visibility: 'hidden' }),
  animate('1000ms 0s', style({ width: '*', visibility: 'visible' }))
 ]),
 transition(':leave', [
  animate('300ms 0s', style({ width: '0px', visibility: 'hidden' }))
 ])
]);

export const slideLeftInOut = trigger("slideLeftInOut", [
 state("in", style({ transform: "translateX(-0%)" })),
 transition("void => *", [
   style({ transform: "translateX(-100%)" }),
   animate('200ms'),
 ]),
 transition("* => void", [
   animate('200ms', style({ transform: "translateX(-100%)" })),
 ]),
]);
