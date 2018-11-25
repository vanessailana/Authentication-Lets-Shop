import { TestBed } from '@angular/core/testing';

import { ProddetailsService } from './proddetails.service';

describe('ProddetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProddetailsService = TestBed.get(ProddetailsService);
    expect(service).toBeTruthy();
  });
});
