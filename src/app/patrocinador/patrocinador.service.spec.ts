/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { PatrocinadorService } from './patrocinador.service';

describe('Service: Patrocinador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatrocinadorService]
    });
  });

  it('should ...', inject([PatrocinadorService], (service: PatrocinadorService) => {
    expect(service).toBeTruthy();
  }));
});
