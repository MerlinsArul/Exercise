import { TestBed } from '@angular/core/testing';

import { DidecoService } from './dideco.service';

describe('DidecoService', () => {
  let service: DidecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DidecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
