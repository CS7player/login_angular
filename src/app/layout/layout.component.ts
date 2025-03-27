import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { RouterModule } from '@angular/router';


@Component({
 selector: 'app-layout',
 imports: [HeaderComponent, FooterComponent, SideMenuComponent, RouterModule],
 templateUrl: './layout.component.html',
 styleUrls: []
})
export class LayoutComponent{
 
 isShowSidebar: boolean = false;
 
}


