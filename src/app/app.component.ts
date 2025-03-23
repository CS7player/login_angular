import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  title = 'login-page';
  constructor(private readonly route : Router){}
 ngOnInit(): void {
  this.route.navigate(['tf']);
 }

}
