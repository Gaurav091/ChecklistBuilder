import { Component } from '@angular/core';
import { AddChecklistTemplateComponent } from './add-checklist-template/add-checklist-template.component';
import { ChecklistBuilderComponent } from './checklist-builder/checklist-builder.component';
import { ChecklistQuestionBankComponent } from './checklist-question-bank/checklist-question-bank.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc';
}
