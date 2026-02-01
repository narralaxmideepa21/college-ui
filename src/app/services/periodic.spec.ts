import { TestBed } from '@angular/core/testing';

import { Periodic } from './periodic';

describe('Periodic', () => {
  let service: Periodic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Periodic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
