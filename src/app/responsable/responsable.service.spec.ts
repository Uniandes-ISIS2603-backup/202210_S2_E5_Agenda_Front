/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResponsableService } from './responsable.service';

describe('Service: Responsable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponsableService]
    });
  });

  it('should ...', inject([ResponsableService], (service: ResponsableService) => {
    expect(service).toBeTruthy();
  }));
});
