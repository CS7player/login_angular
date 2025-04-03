import { Component, inject, OnInit } from '@angular/core';
import { InputType, LoaderComponent, UILoader, TextFieldComponent, UIClicker, UITextField, ClickerComponent } from '@cs7player/scrap-lib';
import { ApiManagerService } from '@cs7player/scrap-lib';
import { NotifyComponent } from '@cs7player/scrap-lib';
import { Router } from '@angular/router';
import { openVertical } from '../utils/animation';
import { ConstantsService } from '../utils/constants.service';
@Component({
 selector: 'app-sign-up',
 imports: [TextFieldComponent, ClickerComponent, LoaderComponent, NotifyComponent],
 templateUrl: './sign-up.component.html',
 styleUrls: [],
 animations: [openVertical]
})
export class SignUpComponent implements OnInit {

 username !: UITextField;
 email !: UITextField;
 newPassword !: UITextField;
 newPasswordClicker !: UIClicker;
 isNewPasswordShow: boolean = false;
 confirmPassword !: UITextField;
 confirmPasswordClicker !: UIClicker;
 isConfirmPasswordShown: boolean = false;
 registerClicker !: UIClicker;
 isLoader: UILoader = new UILoader();
 word: any = {};
 closer!:UIClicker;
 constructor(private readonly api: ApiManagerService,private readonly router : Router) { }
 ngOnInit() {
  this.setUpField();
 }
 setUpField() {
  this.username = new UITextField(1, '', InputType.Text);
  this.username['placeHolder'] = 'Username';

  this.email = new UITextField(2, '', InputType.Text);
  this.email['placeHolder'] = 'Email';

  this.newPassword = new UITextField(3, '', InputType.Password);
  this.newPassword['placeHolder'] = 'New Password';

  this.newPasswordClicker = new UIClicker(4, "");
  this.newPasswordClicker['icon'] = "fa-solid fa-eye";

  this.confirmPassword = new UITextField(5, '', InputType.Text);
  this.confirmPassword['placeHolder'] = 'Confirm Password';

  this.confirmPasswordClicker = new UIClicker(6, "");
  this.confirmPasswordClicker['icon'] = "fa-solid fa-eye";

  this.registerClicker = new UIClicker(7, 'Register');
  this.registerClicker['clClass'] = 'fw04 fs02';

  this.closer = new UIClicker(8,"");
  this.closer['icon'] = "fa-regular fa-circle-xmark";
  this.closer['clClass'] = "p04";
  this.closer['clStyles'] = "background:#f52b2b; border-radius:100%;border:none;"
 }

 eventHandler(event: any) {
  let tag = event['tag'];
  switch (tag) {
   case 1: break;
   case 2: break;
   case 3: break;
   case 4: {
    this.newPassword['inputType'] = !this.isNewPasswordShow ? InputType.Text : InputType.Password;
    this.newPasswordClicker['icon'] = !this.isNewPasswordShow ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    this.isNewPasswordShow = !this.isNewPasswordShow;
    break;
   }
   case 5: break;
   case 6: {
    this.confirmPassword['inputType'] = !this.isConfirmPasswordShown ? InputType.Text : InputType.Password;
    this.confirmPasswordClicker['icon'] = !this.isConfirmPasswordShown ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    this.isConfirmPasswordShown = !this.isConfirmPasswordShown;
    break;
   }
   case 7: {
    this.sumbit();
    break;
   }
   case 8:{
    this.goToLogin();
    break;
   }
  }
 }

 goToLogin(){
  this.router.navigate(['login'])
 }


 sumbit(){
  let params = {
   "username":this.username['selectedValue'],
   "mail":this.email['selectedValue'],
   "password":this.newPassword['selectedValue']
  }
  this.api.doPost(ConstantsService.SIGN_UP_URL,params).subscribe({
   next:(res:any)=>{
    if(res['status']){
     console.log(res);
    }
   }
  })
 }
}
