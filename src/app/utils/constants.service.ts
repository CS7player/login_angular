import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class ConstantsService {

 static readonly lsToken = "token_data";
 static readonly lsAuth = "auth";
 static readonly NODE_URL: string = "http://localhost:3000";
 static readonly LOGIN_URL:string = ConstantsService.NODE_URL+'/login';
 static readonly SIGN_UP_URL:string = ConstantsService.NODE_URL+'/sign_up';

 static readonly NOTIFY : any = {
  "warning":"bg-orange-ink white-ink",
  "success":"bg-green-ink white-ink",
  "danger":"bg-red-ink white-ink",
  "notification":"bg-blue-ink white-ink"
 }

 static readonly LS_TOKEN_KEY = "ls_token";

}
