import { ControlInfo } from './controlInfo';
import { ɵBrowserPlatformLocation } from '@angular/platform-browser';

// tslint:disable-next-line: one-line
export class Question{
    id: number;
    questionText: string;
    isRequired: boolean;
    controls: ControlInfo[];
    questionType: number;
    setData(q: Question) {
      this.id = q.id;
      this.questionText = q.questionText;
      this.isRequired = q.isRequired;
      this.controls = q.controls;
      this.questionType = q.questionType;
    }
}
