import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistQuestionBankComponent } from './checklist-question-bank.component';

describe('ChecklistQuestionBankComponent', () => {
  let component: ChecklistQuestionBankComponent;
  let fixture: ComponentFixture<ChecklistQuestionBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistQuestionBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistQuestionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
