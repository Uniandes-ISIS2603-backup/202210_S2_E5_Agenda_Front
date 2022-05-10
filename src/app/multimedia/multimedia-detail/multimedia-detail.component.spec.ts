/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultimediaDetailComponent } from './multimedia-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Escenario, TipoEscenario } from 'src/app/escenario/escenario';
import faker from '@faker-js/faker';
import { Responsable } from 'src/app/responsable/responsable';
import { Evento } from 'src/app/evento/evento';
import { MultimediaDetail } from '../multimedia-detail';

describe('MultimediaDetailComponent', () => {
  let component: MultimediaDetailComponent;
  let fixture: ComponentFixture<MultimediaDetailComponent>;
  let debug: DebugElement;
  let AULA: TipoEscenario;  // Aula de tipo escenario
  let AUDITORIO: TipoEscenario;  // Auditorio de tipo escenario
  let PLAZOLETA: TipoEscenario;  // Plazoleta de tipo escenario

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ MultimediaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaDetailComponent);
    component = fixture.componentInstance;

    let escenario = new Escenario(
      faker.datatype.number(),
      faker.lorem.sentence(),
      AULA,
      faker.datatype.number()
    );

    let responsable = new Responsable(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.phone.phoneNumber(),
      faker.internet.email(),
      faker.name.jobType()
    );

    let evento = new Evento(
      faker.datatype.number(),
      faker.fake('Evento 1'),
      faker.lorem.sentence(),
      faker.lorem.paragraph(),
      faker.date.past(),
      faker.date.recent,
      faker.lorem.sentence(),
      faker.datatype.number({max: 100000}),
      faker.image.imageUrl(),
      responsable,
      escenario
    );

    component.multimediaDetail= new MultimediaDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      escenario,
      evento
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
