import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { slideLeftInOut } from '../../utils/animation';
import { CommonModule } from '@angular/common';
import { CloseClickService } from '../../utils/close-click.service';

@Component({
 selector: 'app-side-menu',
 imports: [CommonModule],
 templateUrl: './side-menu.component.html',
 styleUrls: [],
 animations: [slideLeftInOut]

})
export class SideMenuComponent   implements OnInit {

 @Output() sidebarCloseEmitter = new EventEmitter<boolean>();
 private closeClick = inject(CloseClickService);
 isShow: boolean = true;

 ngOnInit(){
  this.outSideClick();
 }

 onCloseSidebar() {
  this.isShow = false
  setTimeout(() => {
   this.sidebarCloseEmitter.emit(false)
  }, 300);
 }

 outSideClick() {
  this.closeClick.closeclickEmitter.subscribe(() => {
    this.onCloseSidebar();
  });
 }

}
