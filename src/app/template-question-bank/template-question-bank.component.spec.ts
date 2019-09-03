import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateQuestionBankComponent } from './template-question-bank.component';

describe('TemplateQuestionBankComponent', () => {
  let component: TemplateQuestionBankComponent;
  let fixture: ComponentFixture<TemplateQuestionBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateQuestionBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateQuestionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
