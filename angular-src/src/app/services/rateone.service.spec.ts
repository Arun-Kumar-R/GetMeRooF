import { TestBed, inject } from '@angular/core/testing';

import { RateoneService } from './rateone.service';

describe('RateoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateoneService]
    });
  });

  it('should be created', inject([RateoneService], (service: RateoneService) => {
    expect(service).toBeTruthy();
  }));
});
