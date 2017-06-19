import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { ResultsPage } from './../results/results'

import { Questions } from '../../providers/questions/questions';
import { TestResults } from '../../providers/test-results/test-results';

/**
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild(Slides) slides: Slides;
  apiQuestions: any = [];
  questions: any = [];
  testAnswers: any = {};
  userId: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public questionsProv: Questions,
    public testResults: TestResults) {
    questionsProv.getQuestions(window.localStorage.getItem("token"))
    .map(res => res.json())
    .subscribe(res => {
      this.apiQuestions = res;
      for(let singleQuestion of this.apiQuestions) {
        if(!this.questions[singleQuestion.Question_Number - 1]) {
          this.questions[singleQuestion.Question_Number - 1] = {};
          }
        this.questions[singleQuestion.Question_Number - 1][singleQuestion.Answer_ID] = singleQuestion;
        }
    }, error => {
      alert("warning Will Robinson");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    this.slides.lockSwipes(true);
    this.testAnswers = {
      "userId": 0,
      "Avoiding": 0,
      "Accommodating": 0,
      "Compromising": 0,
      "Competing": 0,
      "Collaborating": 0
    }
  }
  nextSlide(option) {
    this.testAnswers[option.Style]++;
    if(this.slides.getActiveIndex() + 1 != 30){
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
    } else {
      //finished the test, move to results
      //identify user and document date and time of test
      this.testAnswers.createDate = new Date().toISOString();
      this.testAnswers.userId = window.localStorage.getItem("userId");
      console.log("test successful");
      //save test and move to results display
      this.testResults.saveTest(window.localStorage.getItem("token"), this.testAnswers)
      .map(res => res.json())
      .subscribe(res => {
        this.navCtrl.setRoot(ResultsPage, {
          test: this.testAnswers,
          showHome: true
      });
      }, error => {
        alert("Warning, your results have not been saved. Please try again.")
      });
    }
  }

}
