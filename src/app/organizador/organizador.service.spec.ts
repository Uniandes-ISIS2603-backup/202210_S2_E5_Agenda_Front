/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizadorService } from './organizador.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('Service: Organizador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrganizadorService]
    });
  });

  it('should ...', inject([OrganizadorService], (service: OrganizadorService) => {
    expect(service).toBeTruthy();
  }));
});
