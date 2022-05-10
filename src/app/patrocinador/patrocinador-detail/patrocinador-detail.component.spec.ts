/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatrocinadorDetailComponent } from './patrocinador-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PatrocinadorDetail } from '../patrocinador-detail';
import { faker } from '@faker-js/faker';

describe('PatrocinadorDetailComponent', () => {
  let component: PatrocinadorDetailComponent;
  let fixture: ComponentFixture<PatrocinadorDetailComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PatrocinadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadorDetailComponent);
    component = fixture.componentInstance;
    component.patrocinadorDetail=
      new PatrocinadorDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        []
      )
    fixture.detectChanges();
    debug=fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
