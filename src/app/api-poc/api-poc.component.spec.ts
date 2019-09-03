import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPocComponent } from './api-poc.component';

describe('ApiPocComponent', () => {
  let component: ApiPocComponent;
  let fixture: ComponentFixture<ApiPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
