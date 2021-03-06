/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { InvitadoListComponent } from './invitado-list.component';
import { Invitado } from '../invitado';
import { HttpClientModule } from '@angular/common/http';
import { InvitadoDetail } from '../invitado-detail';

describe('InvitadoListComponent', () => {
  let component: InvitadoListComponent;
  let fixture: ComponentFixture<InvitadoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [InvitadoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadoListComponent);
    component = fixture.componentInstance;
    component.invitados = [
      new InvitadoDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        []
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
