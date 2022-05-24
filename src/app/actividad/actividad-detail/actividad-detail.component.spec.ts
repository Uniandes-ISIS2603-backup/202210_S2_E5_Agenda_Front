/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import faker from '@faker-js/faker';
import { ActividadDetailComponent } from './actividad-detail.component';
import { ActividadService } from '../actividad.service';
import { ActividadDetail } from '../actividad-detail';
import { Escenario, TipoEscenario } from '../../escenario/escenario';
import { EscenarioService } from '../../escenario/escenario.service';

import { Actividad } from '../actividad';
import { Evento } from 'src/app/evento/evento';
import { Responsable } from 'src/app/responsable/responsable';


describe('ActividadDetailComponent', () => {
  let component: ActividadDetailComponent;
  let fixture: ComponentFixture<ActividadDetailComponent>;
  let debug: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ActividadDetailComponent ]
    })
    .compileComponents();
  }));

  let AUDITORIO=TipoEscenario.AUDITORIO;
  let responsable=new Responsable(faker.datatype.number(),faker.lorem.sentence(),faker.lorem.sentence(),faker.lorem.sentence(),faker.lorem.sentence())
  let escenario=new Escenario(faker.datatype.number(), faker.lorem.sentence(),AUDITORIO,faker.datatype.number())
  let evento=new Evento(faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),faker.lorem.sentence(),faker.datatype.number(),faker.lorem.sentence(),responsable,escenario)

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadDetailComponent);
    component = fixture.componentInstance;

    component.actividadDetail =
      new ActividadDetail( faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(), evento);

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
