import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class UtilService {

 constructor() { }
 static displayMessage(obj: any, notify_mdl: any) {
  notify_mdl['text'] = obj['text'];
  notify_mdl['color'] = obj['color'];
  setTimeout(() => {
   notify_mdl['text'] = '';
   notify_mdl['color'] = '';
  }, 2000);
 }

}
