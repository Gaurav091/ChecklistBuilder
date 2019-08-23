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
    let q: Question = new Question();
    q.questionText = 'question 1';
    q.isRequired = true;
    q.controls = [];
    q.controls.push(new ControlInfo(1, 'Yes'));
    q.controls.push(new ControlInfo(1, 'No'));
    this.questions.push(q);

    q = new Question();
    q.questionText = 'question 2';
    q.isRequired = true;
    q.controls = [];
    q.controls.push(new ControlInfo(2, 'Textbox'));
    this.questions.push(q);

    q = new Question();
    q.questionText = 'question 3';
    q.isRequired = false;
    q.controls = [];
    q.controls.push(new ControlInfo(3, 'Radio'));
    this.questions.push(q);

    q = new Question();
    q.questionText = 'question 4';
    q.isRequired = true;
    q.controls = [];
    const c1 = {} as ControlInfo;
    c1.controlType = 4;
    c1.label = '';
    c1.items = [];
    c1.items.push(new SelectListItem('<---Select--->', '-1', true));
    c1.items.push(new SelectListItem('Item 1', '1', false));
    c1.items.push(new SelectListItem('Item 2', '2', false));

    q.controls.push(c1);
    this.questions.push(q);

    q = new Question();
    q.questionText = 'What is the actual completion date';
    q.isRequired = true;
    q.controls = [];
    q.controls.push(new ControlInfo(5, ''));
    this.questions.push(q);

    q = new Question();
    q.questionText = 'Please upload the terms and condition document.';
    q.isRequired = true;
    q.controls = [];
    q.controls.push(new ControlInfo(6, ''));
    this.questions.push(q);
   }

  ngOnInit() {
    console.log(this.questions);
  }
  copyQuestion(q: Question) {
    APC.questions.push(q);
  }
  deleteQuestion(i) {
    // alert('delete index' + i);
    APC.questions.splice(i, 1);
  }

}
