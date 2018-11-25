import { TestBed } from '@angular/core/testing';

import { CreateprodService } from './createprod.service';

describe('CreateprodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateprodService = TestBed.get(CreateprodService);
    expect(service).toBeTruthy();
  });
});
