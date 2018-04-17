import { TestBed, inject } from '@angular/core/testing';

import { DateoneService } from './dateone.service';

describe('DateoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateoneService]
    });
  });

  it('should be created', inject([DateoneService], (service: DateoneService) => {
    expect(service).toBeTruthy();
  }));
});
