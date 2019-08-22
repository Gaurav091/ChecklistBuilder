import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSettingsComponent } from './question-settings.component';

describe('QuestionSettingsComponent', () => {
  let component: QuestionSettingsComponent;
  let fixture: ComponentFixture<QuestionSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
