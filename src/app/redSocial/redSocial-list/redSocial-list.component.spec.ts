/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { RedSocialListComponent } from './redSocial-list.component';
import { redSocial } from '../redSocial';
import { HttpClientModule } from '@angular/common/http';
import { RedSocialDetail } from '../redSocial-detail';

describe('redSocialListComponent', () => {
  let component: RedSocialListComponent;
  let fixture: ComponentFixture<RedSocialListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RedSocialListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedSocialListComponent);
    component = fixture.componentInstance;
    component.redesSociales = [
      new RedSocialDetail(
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
