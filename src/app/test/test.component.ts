import { Component, OnInit } from '@angular/core';
import { InputType,UILoader,LoaderComponent, ClickerComponent,UIClicker, TextFieldComponent, UITextField } from '@cs7player/scrap-lib';

@Component({
  selector: 'app-test',
  imports: [TextFieldComponent, ClickerComponent,LoaderComponent],
  templateUrl: './test.component.html',
  styleUrls: []
})
export class TestComponent implements OnInit{
 username !: UITextField;
 submit !: UIClicker;
 isLoader : UILoader = new UILoader();
  ngOnInit(){
   this.username = new UITextField(1,"username",InputType.Text);
   this.username['ipStyles'] = "font-weight:900;"
   this.submit = new UIClicker(2,"Submit");
   this.submit['clStyles'] = "flex-direction:row-reverse;"
  }

  eventHandler(event : any){
   console.log(event);
   let tag = event['tag'];
   if(tag == 2){
    this.isLoader['isLoader'] = !this.isLoader['isLoader'];
    setTimeout(() => {
     this.isLoader['isLoader'] = !this.isLoader['isLoader'];
    }, 2000);
   }
  }
  
}
