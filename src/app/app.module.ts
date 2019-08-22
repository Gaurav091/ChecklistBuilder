import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistBuilderModule } from './checklist-builder/checklist-builder.module';
import { AddChecklistTemplateModule } from './add-checklist-template/add-checklist.module';

// import { AddChecklistTemplateComponent } from './add-checklist-template/add-checklist-template.component';
// import { ChecklistBuilderComponent } from './checklist-builder/checklist-builder.component';

@NgModule({
  declarations: [
    AppComponent
    // AddChecklistTemplateComponent,
    // ChecklistBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChecklistBuilderModule,
    AddChecklistTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
