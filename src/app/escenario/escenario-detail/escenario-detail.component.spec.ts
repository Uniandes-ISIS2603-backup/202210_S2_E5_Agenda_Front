/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EscenarioDetailComponent } from './escenario-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EscenarioDetail } from '../escenario-detail';
import faker from '@faker-js/faker';
import { TipoEscenario } from '../escenario';
import { EscenarioService } from '../escenario.service';

describe('EscenarioDetailComponent', () => {
  let component: EscenarioDetailComponent;
  let fixture: ComponentFixture<EscenarioDetailComponent>;
  let debug: DebugElement

  let AULA: TipoEscenario
  let AUDITORIO: TipoEscenario;  // Auditorio de tipo escenario
  let PLAZOLETA: TipoEscenario;  // Plazoleta de tipo escenario

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ EscenarioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenarioDetailComponent);
    component = fixture.componentInstance;

    component.escenarioDetail =
      new EscenarioDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        AULA,
        faker.datatype.number(),
        [],
        []
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
