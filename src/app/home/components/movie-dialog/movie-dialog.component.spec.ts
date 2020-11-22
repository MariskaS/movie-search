import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieDialogComponent} from './movie-dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {mockOMDBAPIMovieDetailsResponseMapped} from '../../../../tests/stubs/mockData';
import {MovieDetail} from '../../../interfaces';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('MovieDialogComponent', () => {
  let component: MovieDialogComponent;
  let fixture: ComponentFixture<MovieDialogComponent>;
  let dialogRef: MatDialogRef<MovieDetail>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDialogComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {...mockOMDBAPIMovieDetailsResponseMapped}
        },
        {
          provide: MatDialogRef,
          useValue: jasmine.createSpyObj(MatDialogRef, ['close'])
        }
      ]
    });

    dialogRef = TestBed.inject(MatDialogRef);
    fixture = TestBed.createComponent(MovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog when click close icon', () => {
    component.handleClick();
    expect(dialogRef.close).toHaveBeenCalled();
  });
});
