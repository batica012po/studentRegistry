import { TestBed } from '@angular/core/testing';

import { ProfesoriService } from './profesori.service';

describe('ProfesoriService', () => {
  let service: ProfesoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
