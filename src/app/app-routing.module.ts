import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiPocComponent } from './api-poc/api-poc.component';
import { ChecklistMappingComponent } from './checklist-mapping/checklist-mapping.component';


const routes: Routes = [
 // { path: '**', pathMatch: 'full', component:  }
 { path: 'apiPoc', component: ApiPocComponent },
 { path: 'checklistMapping', component: ChecklistMappingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ApiPocComponent , ChecklistMappingComponent];
