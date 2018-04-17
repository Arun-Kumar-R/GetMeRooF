import { TestBed, inject } from '@angular/core/testing';

import { DistanceoneService } from './distanceone.service';

describe('DistanceoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistanceoneService]
    });
  });

  it('should be created', inject([DistanceoneService], (service: DistanceoneService) => {
    expect(service).toBeTruthy();
  }));
});
