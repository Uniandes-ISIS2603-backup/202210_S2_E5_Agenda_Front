/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultimediaListComponent } from './multimedia-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Escenario, TipoEscenario } from 'src/app/escenario/escenario';
import faker from '@faker-js/faker';
import { Multimedia } from '../multimedia';
import { Evento } from 'src/app/evento/evento';
import { Responsable } from 'src/app/responsable/responsable';
import { MultimediaDetail } from '../multimedia-detail';
import { MultimediaService } from '../multimedia.service';

describe('MultimediaListComponent', () => {
  let component: MultimediaListComponent;
  let fixture: ComponentFixture<MultimediaListComponent>;
  let debug: DebugElement;
  let AULA: TipoEscenario;  // Aula de tipo escenario
  let AUDITORIO: TipoEscenario;  // Auditorio de tipo escenario
  let PLAZOLETA: TipoEscenario;  // Plazoleta de tipo escenario

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ MultimediaListComponent ],
      providers: [MultimediaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaListComponent);
    component = fixture.componentInstance;

    let escenario = new Escenario(
      faker.datatype.number(),
      faker.lorem.sentence(),
      AULA,
      faker.datatype.number()
    );

    let responsable = new Responsable(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.phone.phoneNumber(),
      faker.internet.email(),
      faker.name.jobType()
    );

    let evento = new Evento(
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
    );

    component.multimedias= [new MultimediaDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      escenario,
      evento
    ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h5 element ', () => {
    expect(debug.query(By.css('h5')).nativeElement.innerHTML).toContain(component.multimedias[0].nombre)
  });
});
