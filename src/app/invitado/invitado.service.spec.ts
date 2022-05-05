/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { InvitadoService } from './invitado.service';

describe('Service: Invitado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InvitadoService]
    });
  });

  it('should ...', inject([InvitadoService], (service: InvitadoService) => {
    expect(service).toBeTruthy();
  }));
});
