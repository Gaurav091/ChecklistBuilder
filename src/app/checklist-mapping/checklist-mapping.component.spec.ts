import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistMappingComponent } from './checklist-mapping.component';

describe('ChecklistMappingComponent', () => {
  let component: ChecklistMappingComponent;
  let fixture: ComponentFixture<ChecklistMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
