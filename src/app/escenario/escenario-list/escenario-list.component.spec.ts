/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { EscenarioListComponent } from './escenario-list.component';
import { EscenarioDetail } from '../escenario-detail';
import { TipoEscenario } from '../escenario';
import { HttpClientModule } from '@angular/common/http';

describe('EscenarioListComponent', () => {
  let component: EscenarioListComponent;
  let fixture: ComponentFixture<EscenarioListComponent>;
  let debug:  DebugElement

  let AULA: TipoEscenario

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ EscenarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenarioListComponent);
    component = fixture.componentInstance;

    component.escenarios = [
      new EscenarioDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        AULA,
        faker.datatype.number(),
        [],
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
