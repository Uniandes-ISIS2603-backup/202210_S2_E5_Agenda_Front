/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed, async, inject } from '@angular/core/testing';
import { EscenarioService } from './escenario.service';

describe('Service: Escenario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EscenarioService]
    });
  });

  it('should ...', inject([EscenarioService], (service: EscenarioService) => {
    expect(service).toBeTruthy();
  }));
});
