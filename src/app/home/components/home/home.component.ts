import {Component, OnDestroy, OnInit} from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {SpinnerService} from '../../../shared/services/spinner.service';
import {ERROR_MESSAGE, MOVIE, MOVIE_LIST_NO_DATA} from '../../../core/constants';
import {select, Store} from '@ngrx/store';

import {LoadMovieDetail} from '../../data-flow/actions/movie-detail.actions';

import {selectErrorStatus, selectLoadingState} from '../../data-flow/selectors/home-page.selector';
import {selectDetail} from '../../data-flow/selectors/movie-detail.selector';
import {filter, takeUntil} from 'rxjs/operators';

import {MovieListItem} from '../../../core/interfaces';
import {MovieDialogComponent} from '../movie-dialog/movie-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

import {MatDialog} from '@angular/material/dialog';
import {selectMovieList} from '../../../data-flow/selectors/movie-list.selector';
import {LoadMovieList} from '../../../data-flow/actions/movie.actions';
import * as fromRoot from '../../../data-flow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  movies$: Observable<MovieListItem[]>;
  title: string = MOVIE.title;
  noMovies: string = MOVIE_LIST_NO_DATA;
  destroy$ = new Subject<void>();

  constructor(
    private store: Store<fromRoot.State>,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private spinnerService: SpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(LoadMovieList({name: ''}));

    this.movies$ = this.store.pipe(select(selectMovieList));
    this.initLoading();

    this.initMovieDetail();
    this.initErrorHandling();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  clickCard(id: string): void {
    this.store.dispatch(LoadMovieDetail({id}));
  }

  private initMovieDetail(): void {
    this.store
      .pipe(select(selectDetail), filter((detail) => !!detail), takeUntil(this.destroy$))
      .subscribe((detail) => {
        this.dialog.open(MovieDialogComponent, {
          maxWidth: '840px',
          data: detail
        });
      });
  }

  private initErrorHandling(): void {
    this.store
      .pipe(select(selectErrorStatus), filter(Boolean), takeUntil(this.destroy$))
      .subscribe(() => this.snackBar.open(ERROR_MESSAGE, 'Close'));
  }

  private initLoading(): void {
    this.store
      .pipe(select(selectLoadingState), takeUntil(this.destroy$))
      .subscribe((showLoading) => {
        if (showLoading) {
          this.spinnerService.show();
        } else {
          this.spinnerService.hide();
        }
      });
  }
}
