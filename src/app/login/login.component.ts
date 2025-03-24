import { Component, OnInit } from '@angular/core';
import { InputType, LoaderComponent, UILoader, TextFieldComponent, UIClicker, UITextField, ClickerComponent } from '@cs7player/scrap-lib';
import { ApiManagerService } from '../utils/api-manager.service';
import { NotifyComponent } from "../notify/notify.component";
import { UtilService } from '../utils/util.service';
@Component({
 selector: 'app-login',
 imports: [TextFieldComponent, ClickerComponent, LoaderComponent, NotifyComponent],
 templateUrl: './login.component.html',
 styleUrls: []
})
export class LoginComponent implements OnInit {

 username !: UITextField;
 password !: UITextField;
 passwordClicker !: UIClicker;
 isPasswordShow: boolean = false;
 submitClicker!: UIClicker;
 isLoader: UILoader = new UILoader();
 word: any = { text: '', color: "" };
 constructor(private readonly api: ApiManagerService) { }
 ngOnInit() {
  this.setUpField();
 }

 setUpField() {
  this.username = new UITextField(1, '', InputType.Text);
  this.username['placeHolder'] = 'Username';

  this.password = new UITextField(3, '', InputType.Password);
  this.password['placeHolder'] = 'Password';
  this.passwordClicker = new UIClicker(4, '');
  this.passwordClicker['icon'] = "fa-solid fa-eye";

  this.submitClicker = new UIClicker(5, 'Submit');
  this.submitClicker['clClass'] = 'fw04 fs02';
 }

 eventHandler(event: any) {
  let tag = event['tag'];
  switch (tag) {
   case 1: break;
   case 2: break;
   case 3: break;
   case 4: {
    this.password['inputType'] = !this.isPasswordShow ? InputType.Text : InputType.Password;
    this.passwordClicker['icon'] = !this.isPasswordShow ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    this.isPasswordShow = !this.isPasswordShow;
    break;
   }
   case 5: {
    this.validater();
    break;
   }
  }
 }

 getLogin() {
  let params = { "username": this.username['selectedValue'], "password": this.password['selectedValue'] };
  let url = "http://localhost:3000/login";
  this.isLoader['isLoader'] = true;
  this.api.doPost(url, params).subscribe({
   next: (res) => {
    console.log(res);
    this.isLoader['isLoader'] = false;
   },
   error: (error) => {
    console.log(error);
    this.isLoader['isLoader'] = false;
   }
  })
 }

 validater() {
  if (this.username['selectedValue'].length < 7) {
   UtilService.displayMessage({ text: "Username is Short", color: "bg-red-ink white-ink" }, this.word)
   return false;
  }
  if (this.password['selectedValue'].length < 7) {
   UtilService.displayMessage({ text: "Password is Short", color: "bg-red-ink white-ink" }, this.word)
   return false;
  }
  return true;
 }

}
