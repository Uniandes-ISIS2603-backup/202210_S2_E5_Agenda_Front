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

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadListComponent);
    component = fixture.componentInstance;



    component.actividades = [
      new Actividad(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),faker.lorem.sentence()

      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
});
