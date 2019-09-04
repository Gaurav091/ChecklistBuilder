import { TestBed } from '@angular/core/testing';

import { ChecklistService } from './checklist.service';

describe('ChecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChecklistService = TestBed.get(ChecklistService);
    expect(service).toBeTruthy();
  });
});
