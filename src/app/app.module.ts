import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { AddChecklistTemplateComponent } from './add-checklist-template/add-checklist-template.component';
import { ChecklistBuilderComponent } from './checklist-builder/checklist-builder.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { ChecklistQuestionBankComponent } from './checklist-question-bank/checklist-question-bank.component';
import { TemplateQuestionBankComponent } from './template-question-bank/template-question-bank.component';
import { ChecklistService } from './shared/checklist.service';
import { ServerSidePaginationComponent } from './server-side-pagination/server-side-pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    AddChecklistTemplateComponent,
    ChecklistBuilderComponent,
    QuestionListComponent,
    ChecklistQuestionBankComponent,
    TemplateQuestionBankComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [ChecklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
