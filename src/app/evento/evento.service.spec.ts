/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoService } from './evento.service';
import { EventoListComponent } from './evento-list/evento-list.component';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { Escenario } from '../escenario/escenario';
import { Responsable } from '../responsable/responsable';
import { Evento } from './evento';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Evento', () => {
  let component: EventoListComponent;
  let fixture: ComponentFixture<EventoListComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[EventoListComponent],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [EventoService]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(EventoListComponent);
    component = fixture.componentInstance;

    let escenario = new Escenario(
      faker.datatype.number(),
      faker.name.jobArea(),
      faker.datatype.number({min:0,max:3}),
      faker.datatype.number({max:100000})
    );

    let responsable = new Responsable(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.phone.phoneNumber(),
      faker.internet.email(),
      faker.name.jobType()
    );

    component.eventos = [
      new Evento(
        faker.datatype.number(),
        faker.fake('Evento 1'),
        faker.lorem.sentence(),
        faker.lorem.paragraph(),
        faker.date.past(),
        faker.date.recent,
        faker.lorem.sentence(),
        faker.datatype.number({max: 100000}),
        responsable,
        escenario
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create',()=>{
    expect(component).toBeTruthy();
  });

});
