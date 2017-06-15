import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from './../register/register';
import { LoginPage } from './../login/login';

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }
  login() {
    this.navCtrl.push(LoginPage);
  }
  information() {
    alert("The Thomas-Killman Conflict Test is a 30-question test which measures a person's conflict management style.");
  }
}
