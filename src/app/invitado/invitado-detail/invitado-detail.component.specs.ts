/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InvitadoDetailComponent } from './invitado-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InvitadoDetail } from '../invitado-detail';
import faker from '@faker-js/faker';

describe('InvitadoDetailComponent', () => {
  let component: InvitadoDetailComponent;
  let fixture: ComponentFixture<InvitadoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InvitadoDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadoDetailComponent);
    component = fixture.componentInstance;
    component.invitadoDetail =
      new InvitadoDetail(
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
