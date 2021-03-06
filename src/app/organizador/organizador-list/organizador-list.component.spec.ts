/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { OrganizadorListComponent } from './organizador-list.component';
import { Organizador } from '../organizador';
import { HttpClientModule } from '@angular/common/http';
import { OrganizadorDetail } from '../organizador-detail';

describe('OrganizadorListComponent', () => {
  let component: OrganizadorListComponent;
  let fixture: ComponentFixture<OrganizadorListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ OrganizadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorListComponent);
    component = fixture.componentInstance;
    component.organizadores = [
      new OrganizadorDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
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
