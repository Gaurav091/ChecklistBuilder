import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { ControlInfo, SelectListItem } from '../controlInfo';
import * as APC from '../appConstant';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = APC.questions;
  constructor() {
    // let q: Question = new Question();
    // q.id = 10;
    // q.questionText = 'question 1';
    // q.isRequired = true;
    // q.controls = [];
    // q.controls.push(new ControlInfo(1, 'Yes'));
    // q.controls.push(new ControlInfo(1, 'No'));
    // this.questions.push(q);

    // q = new Question();
    // q.id = 11;
    // q.questionText = 'question 2';
    // q.isRequired = true;
    // q.controls = [];
    // q.controls.push(new ControlInfo(2, 'Textbox'));
    // this.questions.push(q);

    // q = new Question();
    // q.id = 12;
    // q.questionText = 'question 3';
    // q.isRequired = false;
    // q.controls = [];
    // q.controls.push(new ControlInfo(3, 'Radio'));
    // this.questions.push(q);

    // q = new Question();
    // q.id = 13;
    // q.questionText = 'question 4';
    // q.isRequired = true;
    // q.controls = [];
    // const c1 = {} as ControlInfo;
    // c1.controlType = 4;
    // c1.label = '';
    // c1.items = [];
    // c1.items.push(new SelectListItem('<---Select--->', '-1', true));
    // c1.items.push(new SelectListItem('Item 1', '1', false));
    // c1.items.push(new SelectListItem('Item 2', '2', false));

    // q.controls.push(c1);
    // this.questions.push(q);

    // q = new Question();
    // q.id = 14;
    // q.questionText = 'What is the actual completion date';
    // q.isRequired = true;
    // q.controls = [];
    // q.controls.push(new ControlInfo(5, ''));
    // this.questions.push(q);

    // q = new Question();
    // q.id = 15;
    // q.questionText = 'Please upload the terms and condition document.';
    // q.isRequired = true;
    // q.controls = [];
    // q.controls.push(new ControlInfo(6, ''));
    // this.questions.push(q);
  }

  ngOnInit() {
    console.log(this.questions);
  }
  copyQuestion(q: Question) {
    APC.questions.unshift(q);
    window.requestAnimationFrame(() => {
      scrollTo(0, 0);
    });
  }
  deleteQuestion(i) {
    // alert('delete index' + i);
    APC.questions.splice(i, 1);
  }
  shiftDown(i) {
    // alert(i);
    const element = document.getElementById(i);
    // this.fade(element);
    if (i === APC.questions.length) { return; }
    const currentQ = APC.questions[i];
    // APC.questions.splice((i + 1), 0, currentQ);
    APC.questions.splice(i, 1);
    APC.questions.splice((i + 1), 0, currentQ);
  }

  shiftUp(i) {
    if (i === 0) { return; }
    // alert(i);
    const currentQ = APC.questions[i];
    // APC.questions.splice((i + 1), 0, currentQ);
    APC.questions.splice(i, 1);
    APC.questions.splice((i - 1), 0, currentQ);
  }

  //   fade(element) {
  //     let op = 1;  // initial opacity
  //     const timer = setInterval(() => {
  //         if (op <= 0.1) {
  //             clearInterval(timer);
  //             element.style.display = 'none';
  //         }
  //         element.style.opacity = op;
  //         element.style.filter = 'alpha(opacity=' + op * 100 + ')';
  //         op -= op * 0.1;
  //     }, 50);
  // }
  // unfade(element) {
  //   let op = 0.1;  // initial opacity
  //   element.style.display = 'block';
  //   const timer = setInterval(() => {
  //       if (op >= 1) {
  //           clearInterval(timer);
  //       }
  //       element.style.opacity = op;
  //       element.style.filter = 'alpha(opacity=' + op * 100 + ')';
  //       op += op * 0.1;
  //   }, 10);
}
