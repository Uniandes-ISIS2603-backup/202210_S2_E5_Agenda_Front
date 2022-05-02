/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EscenarioListComponent } from './escenario-list.component';

describe('EscenarioListComponent', () => {
  let component: EscenarioListComponent;
  let fixture: ComponentFixture<EscenarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscenarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
