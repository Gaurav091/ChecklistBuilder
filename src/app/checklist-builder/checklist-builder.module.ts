import { NgModule } from '@angular/core';

import { ChecklistBuilderComponent } from './checklist-builder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material';
import { QuestionListComponent } from '../question-list/question-list.component';
import { MaterialModule } from '.././material-module';
import {MatFormFieldModule} from '@angular/material/form-field'


@NgModule({
  declarations: [ChecklistBuilderComponent,
                  QuestionListComponent],
  imports: [NgbModule, MatTabsModule, MaterialModule, MatFormFieldModule]
})
export class ChecklistBuilderModule {}
