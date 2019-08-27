import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
  // questionForm: FormGroup;
  // selectedIndex: number;
  // selected = new FormControl(0);
  tabIndex = 0;
  buttonType = 1;
  // selectedQues: any;
  question: Question = new Question();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.buildForm();
    this.question.controls = [];
  }

  // buildForm() {
  //   this.questionForm = this.fb.group({
  //     // paragraphText: new FormControl(''),
  //     // radioButton: new FormControl(''),
  //     // fileAttach: new FormControl(''),
  //     // singleLineText: new FormControl(''),
  //     // checkbox: new FormControl(''),
  //     // dropdown: new FormControl(''),
  //     // calander: new FormControl(''),
  //     // number: new FormControl(''),
  //     // termsAndAcknowledge: new FormControl(''),
  //      questionText: new FormControl(''),
  //      cLabel : new FormControl(''),
  //     // questionControl: new FormControl(''),
  //     required: new FormControl('')
  //   });
  // }


  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
}


changeTab(questionType) {
  // this.selected.setValue(this.selected.value + 1);
  this.tabIndex += 1;
  this.question.questionType = questionType;
  console.log( this.question.questionType);
  if ( this.question.questionType) {
    this.question.controls = [];
    this.question.controls.push(new ControlInfo( this.question.questionType, ''));
    this.buttonType = 1 ;
    // if (this.selectedQues == 4) {
    //   this.question.controls[0].items = [];
    //   this.question.controls[0].items.push(new SelectListItem('', '', false));
    // }
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
        // if (this.selectedQues == 4) {
        //   this.question.controls[0].items = [];
        //   this.question.controls[0].items.push(new SelectListItem('', '', false));
        // }
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
