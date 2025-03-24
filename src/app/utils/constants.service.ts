import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class ConstantsService {

 static lsToken = "token_data";
 static lsAuth = "auth";
 private readonly loginUrl: string = "http://localhost:3000";
}
