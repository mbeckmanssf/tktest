import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionPage } from '../pages/question/question';
import { HistoryPage } from '../pages/history/history';
import { ResultsPage } from '../pages/results/results';
import { AppUsers } from '../providers/app-user/app-user';
import { Questions } from '../providers/questions/questions';
import { TestResults } from '../providers/test-results/test-results';
import { LandingPage } from '../pages/landing/landing';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

let injections: any[] = [
  MyApp,
  LobbyPage,
  QuestionPage,
  HistoryPage,
  ResultsPage,
  LandingPage,
  RegisterPage,
  LoginPage
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUsers,
    Questions,
    TestResults
  ]
})
export class AppModule {}
