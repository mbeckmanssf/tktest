import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUsers } from '../../providers/app-user/app-user';
import { LobbyPage } from '../../pages/lobby/lobby';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsers
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  signupForm(form) {
    console.log(form);
    if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    
    this.appUsers.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      // handle successful responses and decide what happens next
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
        this.navCtrl.setRoot(LobbyPage);
    }, error => {
        // inform the user of any known problems that arose, otherwise give a generic failed message
        if(error === 404){
          return alert("Destination not found, please try again.")
        } else if(error === 422){
          return alert("That email is already registered, please login.");
        } else {
          return alert("An error has ocurred, please try again.");
        }
    });
  }
}
