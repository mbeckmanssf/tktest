import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestResultsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TestResults {
  testResults: any;
  token: any;
  userId: any;
  baseUrl: string = "http://marenssf-phortonssf.c9users.io:8080/api";
  path: string = "/TestResults";
  constructor(public http: Http) {
    console.log('Hello TestResults Provider');
  }
  saveTest(token, testAnswers) {
    return this.http.post(
      this.baseUrl + this.path + "?access_token=" + token,
      testAnswers
    );
  }
  getTests(token) {
    this.userId = window.localStorage.getItem("userId");
    console.log(this.baseUrl + this.path + "?filter[where][userId]=" + this.userId + "&?access_token=" + token);
    return this.http.get(
      this.baseUrl + this.path + "?filter[where][userId]=" + this.userId + "&access_token=" + token) 
      // removed the ? from &?access_token and it worked! -_- for some reason it worked with the ? for me, weird.
      // this.baseUrl + this.path + "?access_token=" + token)
  }
}
