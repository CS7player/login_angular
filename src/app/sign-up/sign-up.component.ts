import { Component, OnInit } from '@angular/core';
import { InputType, LoaderComponent, UILoader, TextFieldComponent, UIClicker, UITextField, ClickerComponent } from '@cs7player/scrap-lib';
import { ApiManagerService } from '../utils/api-manager.service';
import { NotifyComponent } from "../notify/notify.component";
@Component({
 selector: 'app-sign-up',
 imports: [TextFieldComponent, ClickerComponent, LoaderComponent, NotifyComponent],
 templateUrl: './sign-up.component.html',
 styleUrls: []
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
 constructor(private readonly api: ApiManagerService) { }
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
   case 7: break;
  }
 }
}
