import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChecklistTemplateComponent } from './add-checklist-template.component';

describe('AddChecklistTemplateComponent', () => {
  let component: AddChecklistTemplateComponent;
  let fixture: ComponentFixture<AddChecklistTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChecklistTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChecklistTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
