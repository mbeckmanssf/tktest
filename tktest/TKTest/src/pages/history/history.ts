import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from './../results/results';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

//let tests = [];

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  tests: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.tests = JSON.parse(window.localStorage.getItem("tests")) || [];
    console.log(this.tests);
  }
  goToResult(test) {
    this.navCtrl.push(ResultsPage, {
      test: this.tests,
      showHome: true
    });
  }
}
