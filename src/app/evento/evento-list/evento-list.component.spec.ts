/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoService } from '../evento.service';

import { faker } from '@faker-js/faker';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventoListComponent } from './evento-list.component';
import { Escenario, TipoEscenario } from 'src/app/escenario/escenario';
import { Responsable } from 'src/app/responsable/responsable';
import { Evento } from '../evento';
import { By } from '@angular/platform-browser';


describe('Service: Evento', () => {
  let component: EventoListComponent;
  let fixture: ComponentFixture<EventoListComponent>;
  let debug: DebugElement;
  let AULA: TipoEscenario;  // Aula de tipo escenario
  let AUDITORIO: TipoEscenario;  // Auditorio de tipo escenario
  let PLAZOLETA: TipoEscenario;  // Plazoleta de tipo escenario

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
        faker.image.imageUrl(),
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

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.eventos[0].nombre
    );
  });

});
