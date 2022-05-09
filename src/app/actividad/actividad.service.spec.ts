/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ActividadService } from './actividad.service';

describe('Service: Actividad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ActividadService]
    });
  });

  it('should ...', inject([ActividadService], (service: ActividadService) => {
    expect(service).toBeTruthy();
  }));
});
