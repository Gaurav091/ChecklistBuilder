import { Component, OnInit } from '@angular/core';
import { CreateQuestionComponent } from '../create-question/create-question.component';
import { QuestionSettingsComponent } from '../question-settings/question-settings.component';
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
import { ControlInfo } from '../controlInfo';
import { MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-checklist-builder',
  templateUrl: './checklist-builder.component.html',
  styleUrls: ['./checklist-builder.component.css']
})
export class ChecklistBuilderComponent implements OnInit {
  questionForm: FormGroup;
  selectedIndex: number;
  selected = new FormControl(0);
  selectedQues: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.questionForm = this.fb.group({
      paragraphText: new FormControl(''),
      radioButton: new FormControl(''),
      fileAttach: new FormControl(''),
      singleLineText: new FormControl(''),
      checkbox: new FormControl(''),
      dropdown: new FormControl(''),
      calander: new FormControl(''),
      number: new FormControl(''),
      termsAndAcknowledge: new FormControl(''),
      questionText: new FormControl(''),
      questionControl: new FormControl(''),
      required: new FormControl('')
    });
  }


  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
}

  public nextStep() {
    this.selectedIndex += 1;
    console.log('eew ' + this.selectedIndex);
}

changeTab(buttonValue) {
  this.selected.setValue(this.selected.value + 1);
  this.selectedQues = buttonValue;
  console.log(this.selected.value);
}

  public previousStep() {
    this.selectedIndex -= 1;
}

  login(value) {
    console.log(value);
    const qObj: Question = new Question();
    qObj.questionText = value.questionText;
    qObj.isRequired = value.required;
    qObj.controls = [];
    qObj.controls.push(new ControlInfo(value.questionControl, ''));

    APC.questions.push(qObj);
    console.log(qObj);
  }

}
