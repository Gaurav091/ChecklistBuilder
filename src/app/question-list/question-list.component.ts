import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { ControlInfo } from '../controlInfo';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
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
    q.controls.push(new ControlInfo(3, 'Dropdown'));
    this.questions.push(q);
   }

  ngOnInit() {
    console.log(this.questions);
  }

}
