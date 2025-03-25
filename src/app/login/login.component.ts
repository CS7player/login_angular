import { Component, OnInit } from '@angular/core';
import { InputType, LoaderComponent, UILoader, TextFieldComponent, UIClicker, UITextField, ClickerComponent } from '@cs7player/scrap-lib';
import { ApiManagerService } from '@cs7player/scrap-lib';
import { NotifyComponent } from '@cs7player/scrap-lib';
import { UtilService } from '../utils/util.service';
import { ConstantsService } from '../utils/constants.service';
import { Router } from '@angular/router';
import { openVertical } from '../utils/animation';
@Component({
 selector: 'app-login',
 imports: [TextFieldComponent, ClickerComponent, LoaderComponent, NotifyComponent],
 templateUrl: './login.component.html',
 styleUrls: [],
 animations:[openVertical]
})
export class LoginComponent implements OnInit {

 username !: UITextField;
 password !: UITextField;
 passwordClicker !: UIClicker;
 isPasswordShow: boolean = false;
 submitClicker!: UIClicker;
 isLoader: UILoader = new UILoader();
 word: any = { text: '', color: "" };
 notify_color : any = ConstantsService.NOTIFY;
 constructor(private readonly api: ApiManagerService,private readonly router : Router) { }
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
    if(this.validater()){
     this.getLogin();
    }
    break;
   }
  }
 }

 getLogin() {
  let params = { "username": this.username['selectedValue'], "password": this.password['selectedValue'] };
  let url = ConstantsService.LOGIN_URL;
  this.isLoader['isLoader'] = true;
  this.api.doPost(url, params).subscribe({
   next: (res) => {
    console.log(res);
    this.isLoader['isLoader'] = false;
    if(res['status']){
     UtilService.displayMessage({ text: "Login Successfully!!!", color: this.notify_color['success'] }, this.word)

    }else{
     UtilService.displayMessage({ text: "Wrong Credintals", color: this.notify_color['warning'] }, this.word)
     this.clear();
    }
   },
   error: (error) => {
    this.isLoader['isLoader'] = false;
    UtilService.displayMessage({ text: "Something went Wrong!!!", color: this.notify_color['danger'] }, this.word)
   }
  })
 }

 validater() {
  if (this.username['selectedValue'].length < 7) {
   UtilService.displayMessage({ text: "Username is Short", color: this.notify_color['warning'] }, this.word)
   return false;
  }
  if (this.password['selectedValue'].length < 7) {
   UtilService.displayMessage({ text: "Password is Short", color: this.notify_color['warning'] }, this.word)
   return false;
  }
  return true;
 }

 clear(){
  this.username['selectedValue'] = '';
  this.password['selectedValue'] = '';
 }

 goToRegister(){
  this.router.navigate(['sign-up']);
 }

 goToForgetPassword(){
  this.router.navigate(['forget-password']);
 }

}
