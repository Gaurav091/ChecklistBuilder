import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSidePaginationComponent } from './server-side-pagination.component';

describe('ServerSidePaginationComponent', () => {
  let component: ServerSidePaginationComponent;
  let fixture: ComponentFixture<ServerSidePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSidePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSidePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
