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
  saveTest(testAnswers) {
    return this.http.post(
      this.baseUrl + this.path,
      testAnswers
    );
  }
  getTests(token) {
    this.userId = window.localStorage.getItem("userId");
    return this.http.get(
      this.baseUrl + this.path + "?filter[where][userId]=" + this.userId)
  }
}
