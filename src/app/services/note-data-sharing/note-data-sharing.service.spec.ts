import { TestBed } from '@angular/core/testing';

import { NoteDataSharingService } from './note-data-sharing.service';

describe('NoteDataSharingService', () => {
  let service: NoteDataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteDataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
