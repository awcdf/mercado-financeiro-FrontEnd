import { TestBed } from '@angular/core/testing';

import { AcoesMercadoService } from './acoes-mercado-service';

describe('AcoesMercadoService', () => {
  let service: AcoesMercadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcoesMercadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
