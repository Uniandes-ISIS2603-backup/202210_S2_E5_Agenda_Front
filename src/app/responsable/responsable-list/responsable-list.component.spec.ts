/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { ResponsableListComponent } from './responsable-list.component';
import { Responsable } from '../responsable';
import { HttpClientModule } from '@angular/common/http';
import { ResponsableDetail } from '../responsable-detail';



describe('ResponsableListComponent', () => {
  let component: ResponsableListComponent;
  let fixture: ComponentFixture<ResponsableListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ResponsableListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableListComponent);
    component = fixture.componentInstance;
    component.responsables = [
      new ResponsableDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        []
      )
     ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

