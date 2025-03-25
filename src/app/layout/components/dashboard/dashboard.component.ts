import { Component, inject, OnInit } from '@angular/core';
import { CloseClickService } from '../../../utils/close-click.service';

@Component({
 selector: 'app-dashboard',
 imports: [],
 templateUrl: './dashboard.component.html',
 styleUrls: []
})
export class DashboardComponent implements OnInit{
 private closeClick = inject(CloseClickService);
 ngOnInit(){
  this.outSideClick();
 }

 outSideClick() {
  this.closeClick.closeclickEmitter.subscribe(() => {
   console.log('testing');
  });
}

}
