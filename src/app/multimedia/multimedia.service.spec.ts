/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { MultimediaService } from './multimedia.service';

describe('Service: Multimedia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MultimediaService]
    });
  });

  it('should ...', inject([MultimediaService], (service: MultimediaService) => {
    expect(service).toBeTruthy();
  }));
});
