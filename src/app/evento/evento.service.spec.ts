import { TestBed, async, inject } from '@angular/core/testing';
import { EventoService } from './evento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Evento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventoService]
    });
  });

  it('should ...', inject([EventoService], (service: EventoService) => {
    expect(service).toBeTruthy();
  }));
});