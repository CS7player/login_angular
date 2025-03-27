import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class CloseClickService {
 closeclickEmitter: EventEmitter<any> = new EventEmitter<any>();
 constructor() {
  this.listenToDocClick();
 }
 private listenToDocClick() {
  document.addEventListener("click", (event) => {
   const target = event.target as HTMLElement;
   const closeElements = document.querySelectorAll('.close-code');
   const clickedInsideCustomClose = Array.from(closeElements).some((element) => element.contains(target));
   if (!clickedInsideCustomClose) {
    this.onClicking();
   }
  })
 }

 onClicking(){
  this.closeclickEmitter.emit();
 }
}
