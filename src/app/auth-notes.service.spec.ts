import { TestBed } from '@angular/core/testing';

import { AuthNotesService } from './auth-notes.service';

describe('AuthNotesService', () => {
  let service: AuthNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
