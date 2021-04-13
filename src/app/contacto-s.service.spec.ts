import { TestBed } from '@angular/core/testing';

import { ContactoSService } from './contacto-s.service';

describe('ContactoSService', () => {
  let service: ContactoSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
