/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { PatrocinadorListComponent } from './patrocinador-list.component';
import { Patrocinador } from '../patrocinador';
import { HttpClientModule } from '@angular/common/http';

describe('PatrocinadorListComponent', () => {
  let component: PatrocinadorListComponent;
  let fixture: ComponentFixture<PatrocinadorListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PatrocinadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadorListComponent);
    component = fixture.componentInstance;
    component.patrocinadores= [new Patrocinador(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    ),
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
