import { TestBed } from '@angular/core/testing';

import { ComarcasService } from './comarcas.service';

describe('ComarcasService', () => {
  let service: ComarcasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComarcasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
