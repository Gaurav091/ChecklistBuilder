import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';

// import { ChecklistBuilderModule } from './checklist-builder/checklist-builder.module';
// import { AddChecklistTemplateModule } from './add-checklist-template/add-checklist.module';

import { AddChecklistTemplateComponent } from './add-checklist-template/add-checklist-template.component';
import { ChecklistBuilderComponent } from './checklist-builder/checklist-builder.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionSettingsComponent } from './question-settings/question-settings.component';

@NgModule({
  declarations: [
    AppComponent,
     AddChecklistTemplateComponent,
     ChecklistBuilderComponent,
     CreateQuestionComponent,
     QuestionSettingsComponent
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
    // ChecklistBuilderModule,
    // AddChecklistTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
