/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { redSocialService } from './redSocial.service';

describe('Service: redSocial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [redSocialService]
    });
  });

  it('should ...', inject([redSocialService], (service: redSocialService) => {
    expect(service).toBeTruthy();
  }));
});
