/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EscenarioService } from './escenario.service';

describe('Service: Escenario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscenarioService]
    });
  });

  it('should ...', inject([EscenarioService], (service: EscenarioService) => {
    expect(service).toBeTruthy();
  }));
});
