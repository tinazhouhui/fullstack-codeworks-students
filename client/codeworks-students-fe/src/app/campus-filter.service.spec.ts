import { TestBed } from '@angular/core/testing';

import { CampusFilterService } from './campus-filter.service';

describe('CampusFilterService', () => {
  let service: CampusFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampusFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
