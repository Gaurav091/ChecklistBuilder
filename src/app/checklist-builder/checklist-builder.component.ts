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
  selectedQues: any;
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
  this.selectedQues = questionType;
  console.log(this.selectedQues);
  if (this.selectedQues) {
    this.question.controls = [];
    this.question.controls.push(new ControlInfo(this.selectedQues, ''));
    // if (this.selectedQues == 4) {
    //   this.question.controls[0].items = [];
    //   this.question.controls[0].items.push(new SelectListItem('', '', false));
    // }
  }
  console.log(this.question);
  console.log(this.selectedQues);
}

  createQuestion(value) {
    console.log(value);
    APC.questions.unshift(this.question);
    console.log(this.question);
    this.question = new Question();
    this.selectedQues = '';
    this.tabIndex = 0;
  }
  copyControl(c: ControlInfo) {
    console.log(c);
    const c1: ControlInfo = new ControlInfo(c.controlType, c.label);
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
    const item1: SelectListItem = new SelectListItem(item.text, item.value, item.isSelected);
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

  }
