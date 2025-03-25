import { Component, EventEmitter, Output } from '@angular/core';

@Component({
 selector: 'app-header',
 imports: [],
 templateUrl: './header.component.html',
 styleUrls: []
})
export class HeaderComponent {
 @Output() toggleSidebar = new EventEmitter<boolean>();
 ngOnInit() { }
 onOpenSideBar() {
  this.toggleSidebar.emit(true);
 }
}
