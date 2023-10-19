/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValuewComponent } from './valuew.component';

describe('ValuewComponent', () => {
  let component: ValuewComponent;
  let fixture: ComponentFixture<ValuewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
