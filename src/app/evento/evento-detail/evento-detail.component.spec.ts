/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventoDetailComponent } from './evento-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Escenario, TipoEscenario } from 'src/app/escenario/escenario';
import faker from '@faker-js/faker';
import { Responsable } from 'src/app/responsable/responsable';
import { EventoDetail } from '../evento-detail';

describe('EventoDetailComponent', () => {
  let component: EventoDetailComponent;
  let fixture: ComponentFixture<EventoDetailComponent>;
  let debug: DebugElement;
  let AUDITORIO: TipoEscenario;  // Auditorio de tipo escenario

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ EventoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDetailComponent);
    component = fixture.componentInstance;

    let escenario = new Escenario(
      faker.datatype.number(),
      faker.name.jobArea(),
      AUDITORIO,
      faker.datatype.number({max:100000})
    );

    let responsable = new Responsable(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.phone.phoneNumber(),
      faker.internet.email(),
      faker.name.jobType()
    );

    component.eventoDetail= new EventoDetail(
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
      escenario,
      [],[],[],[],[]
    );
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.eventoDetail.nombre
    );
  });
});
