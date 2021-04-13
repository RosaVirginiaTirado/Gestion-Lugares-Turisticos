import { TestBed } from '@angular/core/testing';

import { SitioSService } from './sitio-s.service';

describe('SitioSService', () => {
  let service: SitioSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitioSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
