import { TestBed } from '@angular/core/testing';

import { AisleService } from './aisle.service';

describe('AisleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AisleService = TestBed.get(AisleService);
    expect(service).toBeTruthy();
  });
});
