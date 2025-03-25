import { Component, EventEmitter, Output } from '@angular/core';
import { openHorizontal } from '../../utils/animation';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-side-menu',
 imports: [CommonModule],
 templateUrl: './side-menu.component.html',
 styleUrls: [],
 animations: [openHorizontal]

})
export class SideMenuComponent {
 @Output() sidebarCloseEmitter = new EventEmitter<boolean>()
 isShow: boolean = true
 onCloseSidebar() {
  this.isShow = false
  setTimeout(() => {
   this.sidebarCloseEmitter.emit(false)
  }, 300);
 }
}
