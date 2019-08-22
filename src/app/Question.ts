import { ControlInfo } from './controlInfo';
import { ɵBrowserPlatformLocation } from '@angular/platform-browser';

// tslint:disable-next-line: one-line
export class Question{
    questionText: string;
    isRequired: boolean;
    controls: ControlInfo[];
}
