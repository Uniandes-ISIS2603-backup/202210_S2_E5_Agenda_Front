/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizadorService } from './organizador.service';

describe('Service: Organizador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizadorService]
    });
  });

  it('should ...', inject([OrganizadorService], (service: OrganizadorService) => {
    expect(service).toBeTruthy();
  }));
});
