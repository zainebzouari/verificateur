import { TestBed } from '@angular/core/testing';

import { CbfilsService } from './cbfils.service';

describe('CbfilsService', () => {
  let service: CbfilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbfilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
