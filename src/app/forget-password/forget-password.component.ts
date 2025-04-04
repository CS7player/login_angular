import { Component, inject, OnInit } from '@angular/core';
import { ClickerComponent, InputType, LoaderComponent, TextFieldComponent, UIClicker, UILoader, UITextField } from '@cs7player/scrap-lib';
import { openVertical } from '../utils/animation';
import { Router } from '@angular/router';

@Component({
 selector: 'app-forget-password',
 imports: [ClickerComponent,TextFieldComponent,LoaderComponent],
 templateUrl: './forget-password.component.html',
 styleUrls: [],
 animations: [openVertical]
})
export class ForgetPasswordComponent implements OnInit {

 private router = inject(Router);
 closer!: UIClicker;
 tf_email !: UITextField;
 tf_newPassword !: UITextField;
 cl_newPasswordClicker !: UIClicker;
 isNewPasswordShow: boolean = false;
 tf_confirmPassword !: UITextField;
 cl_confirmPasswordClicker !: UIClicker;
 isConfirmPasswordShown: boolean = false;
 cl_submitClicker !: UIClicker;
 isLoader: UILoader = new UILoader();
 ngOnInit() {
  this.setUpField();
 }
 setUpField() {
  this.tf_email = new UITextField(2, '', InputType.Text);
  this.tf_email['placeHolder'] = 'Email';

  this.tf_newPassword = new UITextField(3, '', InputType.Password);
  this.tf_newPassword['placeHolder'] = 'New Password';

  this.cl_newPasswordClicker = new UIClicker(4, "");
  this.cl_newPasswordClicker['icon'] = "fa-solid fa-eye";

  this.tf_confirmPassword = new UITextField(5, '', InputType.Password);
  this.tf_confirmPassword['placeHolder'] = 'Confirm Password';

  this.cl_confirmPasswordClicker = new UIClicker(6, "");
  this.cl_confirmPasswordClicker['icon'] = "fa-solid fa-eye";

  this.cl_submitClicker = new UIClicker(7, 'Submit');
  this.cl_submitClicker['clClass'] = 'fw04 fs02';

  this.closer = new UIClicker(8, "");
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
    this.tf_newPassword['inputType'] = !this.isNewPasswordShow ? InputType.Text : InputType.Password;
    this.cl_newPasswordClicker['icon'] = !this.isNewPasswordShow ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    this.isNewPasswordShow = !this.isNewPasswordShow;
    break;
   }
   case 5: break;
   case 6: {
    this.tf_confirmPassword['inputType'] = !this.isConfirmPasswordShown ? InputType.Text : InputType.Password;
    this.cl_confirmPasswordClicker['icon'] = !this.isConfirmPasswordShown ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    this.isConfirmPasswordShown = !this.isConfirmPasswordShown;
    break;
   }
   case 7: { 
    // this.sumbit();
    break;
   }
   case 8: {
    this.goToLogin();
    break;
   }
  }
 }

 goToLogin() {
  this.router.navigate(['login'])
 }
}
