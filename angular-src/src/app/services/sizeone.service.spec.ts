import { TestBed, inject } from '@angular/core/testing';

import { SizeoneService } from './sizeone.service';

describe('SizeoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SizeoneService]
    });
  });

  it('should be created', inject([SizeoneService], (service: SizeoneService) => {
    expect(service).toBeTruthy();
  }));
});
