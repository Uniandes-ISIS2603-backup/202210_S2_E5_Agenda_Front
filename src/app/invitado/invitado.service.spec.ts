/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InvitadoService } from './invitado.service';

describe('Service: Invitado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvitadoService]
    });
  });

  it('should ...', inject([InvitadoService], (service: InvitadoService) => {
    expect(service).toBeTruthy();
  }));
});
