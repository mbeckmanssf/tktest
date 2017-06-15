import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUsers {
  baseUrl: string = "http://marenssf-phortonssf.c9users.io:8080/api";
  path: string = "/AppUsers";
  loginPath: string = "/login";
  constructor(public http: Http) {
    console.log('Hello AppUsers Provider');
  }
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }
  login(loginUserData) {
    return this.http.post(
      this.baseUrl + this.path + this.loginPath,
      loginUserData
    );
  }
}