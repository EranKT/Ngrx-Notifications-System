import { TestBed } from '@angular/core/testing';

import { DesignLibService } from './design-lib.service';

describe('DesignLibService', () => {
  let service: DesignLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
