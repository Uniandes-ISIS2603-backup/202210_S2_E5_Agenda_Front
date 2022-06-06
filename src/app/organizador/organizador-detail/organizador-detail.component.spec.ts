/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrganizadorDetailComponent } from './organizador-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrganizadorDetail } from '../organizador-detail';
import faker from '@faker-js/faker';

describe('OrganizadorDetailComponent', () => {
  let component: OrganizadorDetailComponent;
  let fixture: ComponentFixture<OrganizadorDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ OrganizadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorDetailComponent);
    component = fixture.componentInstance;
    component.organizadorDetail =
      new OrganizadorDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        []
      )
    fixture.detectChanges();
  });

});
