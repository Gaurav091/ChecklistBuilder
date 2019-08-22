import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AddChecklistTemplateComponent } from './add-checklist-template/add-checklist-template.component';
// import { ChecklistBuilderComponent } from './checklist-builder/checklist-builder.component';


const routes: Routes = [
 // { path: '**', pathMatch: 'full', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
