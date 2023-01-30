import { TestBed } from '@angular/core/testing';

import { ShoopingService } from './shooping.service';

describe('ShoopingService', () => {
  let service: ShoopingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoopingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
