import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from './../question/question'
import { HistoryPage } from './../history/history'
import { AppUsers } from '../../providers/app-user/app-user';

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {
  token: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsers) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
  takeTest() {
    this.navCtrl.push(QuestionPage);
  }
  showHistory() {
    this.navCtrl.push(HistoryPage);
  }
  
  logout() {
    this.appUsers.logout(window.localStorage.getItem("token"))
  }
}
