import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Questions {
  token: any = {};
  baseUrl: string = "http://marenssf-phortonssf.c9users.io:8080/api";
  path: string = "/Questions";
  constructor(public http: Http) {
    console.log('Hello Questions Provider');
  }
  getQuestions(token) {
    return this.http.get(
      this.baseUrl + this.path + "?access_token=" + token);
    }
}
