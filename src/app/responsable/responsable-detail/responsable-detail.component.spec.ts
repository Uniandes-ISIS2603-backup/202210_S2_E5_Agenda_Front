/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResponsableDetailComponent } from './responsable-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResponsableDetail } from '../responsable-detail';
import faker from '@faker-js/faker';

describe('ResponsableDetailComponent', () => {
  let component: ResponsableDetailComponent;
  let fixture: ComponentFixture<ResponsableDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ResponsableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableDetailComponent);
    component = fixture.componentInstance;
    component.responsableDetail =
    new ResponsableDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
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
