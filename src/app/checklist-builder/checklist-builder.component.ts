import { Component, OnInit } from '@angular/core';
import * as APC from '../appConstant';
import { Question } from '../Question';
import { ControlInfo, SelectListItem } from '../controlInfo';
import { MatTabChangeEvent } from '@angular/material';
@Component({
  selector: 'app-checklist-builder',
  templateUrl: './checklist-builder.component.html',
  styleUrls: ['./checklist-builder.component.css']
})
export class ChecklistBuilderComponent implements OnInit {
  tabIndex = 0;
  buttonType = 1;
  question: Question = new Question();

  constructor() {
  }

  ngOnInit() {
    this.question.controls = [];
    this.question.questionType = 0;
  }

 public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
}

changeTab(questionType) {
  this.tabIndex += 1;
  this.question.questionType = questionType;
  console.log( this.question.questionType);
  if ( this.question.questionType) {
    this.question.controls = [];
    this.question.controls.push(new ControlInfo( this.question.questionType, ''));
    this.buttonType = 1 ;
  }

  console.log(this.question);
  console.log( this.question.questionType);
}

  createQuestion(value) {
    console.log(value);
    this.question.id = Math.random();
    APC.questions.unshift(this.question);
    console.log(this.question);
    this.question = new Question();
    this.question.questionType = -1;
    this.tabIndex = 0;

  }
  copyControl(c: ControlInfo) {
    console.log(c);
    const c1: ControlInfo = new ControlInfo(c.controlType, '');
    if (c.controlType === 4) {
      c1.items = [];
      // c1.items.push(new SelectListItem('', '', false));
    }

    this.question.controls.push(c1);
  }
  deleteControl(i) {
    if ( this.question.controls.length > 1 ) {
    this.question.controls.splice(i, 1);
    }
  }
  copyItem(c: ControlInfo, item: SelectListItem) {
    console.log(item);
    const item1: SelectListItem = new SelectListItem('', item.value, item.isSelected);
    c.items.push(item1);
  }
  deleteItem(c: ControlInfo, j) {
     if (c.items.length > 1 ) {
      c.items.splice(j, 1);
    }
  }
  addFirstItem(c: ControlInfo) {
      c.items = [];
      c.items.push(new SelectListItem('', '', false));
    }
    questionTypeChange($event) {
      if ( this.question.questionType) {
        this.question.controls = [];
        this.question.controls.push(new ControlInfo( this.question.questionType, ''));
        console.log(this.question.controls);
      }
    }

    populateQuestion(q: Question) {
      this.question = q;
      this.tabIndex = 1;
      this.buttonType = 2;

    }

    updateQuestion() {
    const i =  APC.questions.findIndex(s => s.id === this.question.id);
    APC.questions[i] = this.question;
    console.log(this.question);
    this.question = new Question();
    this.question.questionType = -1;
    this.tabIndex = 0;
    this.buttonType = 1;
    }

  }
