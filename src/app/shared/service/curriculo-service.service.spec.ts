import { TestBed } from '@angular/core/testing';

import { CurriculoService } from './curriculo-service.service';

describe('CurriculoServiceService', () => {
  let service: CurriculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});