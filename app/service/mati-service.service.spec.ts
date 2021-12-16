import { TestBed } from '@angular/core/testing';

import { MatiServiceService } from './mati-service.service';

describe('MatiServiceService', () => {
  let service: MatiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
