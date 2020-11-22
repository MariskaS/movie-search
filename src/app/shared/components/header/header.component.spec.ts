import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {provideMockStore} from '@ngrx/store/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle icon when click it', () => {
    component.toggleIcon = false;

    component.handleClick();
    expect(component.toggleIcon).toBeTruthy();
  });
});
