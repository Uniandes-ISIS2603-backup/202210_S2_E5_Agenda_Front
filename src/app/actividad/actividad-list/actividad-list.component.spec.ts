/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { ActividadService } from '../actividad.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActividadListComponent } from './actividad-list.component';
import { ActividadDetail} from '../actividad-detail';
import { Actividad } from '../actividad';
import { Evento } from 'src/app/evento/evento';
import { Responsable } from 'src/app/responsable/responsable';
import { Escenario, TipoEscenario } from 'src/app/escenario/escenario';


describe('ActividadListComponent', () => {
  let component: ActividadListComponent;
  let fixture: ComponentFixture<ActividadListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ActividadListComponent ],
      providers: [ ActividadListComponent ]
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
    fixture = TestBed.createComponent(ActividadListComponent);
    component = fixture.componentInstance;



    component.actividades = [
      new Actividad(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(), evento)

      ,
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
