/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResponsableService } from './responsable.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('Service: Responsable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResponsableService]
    });
  });

  it('should ...', inject([ResponsableService], (service: ResponsableService) => {
    expect(service).toBeTruthy();
  }));
});
