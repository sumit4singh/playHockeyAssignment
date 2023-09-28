import { TestBed } from '@angular/core/testing';

import { LocalDataAccessService } from './local-data-access.service';

describe('LocalDataAccessService', () => {
  let service: LocalDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
