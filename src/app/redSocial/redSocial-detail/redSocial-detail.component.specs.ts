/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedSocialDetailComponent } from './redSocial-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RedSocialDetail } from '../redSocial-detail';
import faker from '@faker-js/faker';

describe('RedSocialDetailComponent', () => {
  let component: RedSocialDetailComponent;
  let fixture: ComponentFixture<RedSocialDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [RedSocialDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedSocialDetailComponent);
    component = fixture.componentInstance;
    component.redSocialDetail =
      new RedSocialDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        []
      )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
