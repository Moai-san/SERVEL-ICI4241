import { TestBed } from '@angular/core/testing';

import { ConexionBackEndService } from './conexion-back-end.service';

describe('ConexionBackEndService', () => {
  let service: ConexionBackEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionBackEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
