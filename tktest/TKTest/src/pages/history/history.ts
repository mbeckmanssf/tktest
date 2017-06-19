import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from './../results/results';

import { TestResults } from '../../providers/test-results/test-results';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  tests: any; //this is value u want to pass, you passed this.test below instead of this.test
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public testResults: TestResults) {
  }
//view list of all tests taken
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    console.log(window.localStorage.getItem("token"))
    this.testResults.getTests(window.localStorage.getItem("token"))
    .map(res => res.json())
    .subscribe(res => {
      this.tests = res;
      console.log(res);
      console.log("test results");
    }, error => {
      alert("Warning, your history could not be retrieved.");
    });
  }
//navigate to specific test incident to view results
  goToResult(test) {
    console.log("this is test",test)
    this.navCtrl.push(ResultsPage, {
      test: test,
    })
    console.log(test + " tests results");
  }
}
