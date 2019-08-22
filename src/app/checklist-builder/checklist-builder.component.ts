import { Component, OnInit } from '@angular/core';
import { CreateQuestionComponent } from '../create-question/create-question.component';
import { QuestionSettingsComponent } from '../question-settings/question-settings.component';


@Component({
  selector: 'app-checklist-builder',
  templateUrl: './checklist-builder.component.html',
  styleUrls: ['./checklist-builder.component.css']
})
export class ChecklistBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
