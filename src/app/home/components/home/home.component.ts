import {Component, OnDestroy, OnInit} from '@angular/core';

import {ERROR_MESSAGE, MOVIE, MOVIE_LIST_NO_DATA} from '../../../constants';
import {combineLatest, Observable, Subject} from 'rxjs';
import {MovieListItem} from '../../../interfaces';
import {MovieService} from '../../services/movie.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../data-flow';
import {LoadMovieDetail, LoadMovieList} from '../../data-flow/actions/movie.actions';
import {selectError, selectList, selectLoading} from '../../data-flow/selectors/movie.selector';
import {filter, map, takeUntil} from 'rxjs/operators';
import {MovieDialogComponent} from '../movie-dialog/movie-dialog.component';
import {selectDetail, selectDetailError, selectDetailLoading} from '../../data-flow/selectors/movie-detail.selector';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  movies$: Observable<MovieListItem[]>;
  title: string = MOVIE.title;
  noMovies: string = MOVIE_LIST_NO_DATA;
  loading$: Observable<boolean>;
  destroy$ = new Subject<void>();

  constructor(private movieService: MovieService,
              private snackBar: MatSnackBar,
              private store: Store<fromRoot.State>,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(LoadMovieList());

    this.movies$ = this.store.pipe(select(selectList));
    this.loading$ = this.getLoadingStream();

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
    combineLatest(
      [
        this.store.pipe(select(selectError)),
        this.store.pipe(select(selectDetailError))
      ]
    )
      .pipe(
        filter(([error, detailError]) => !!error || !!detailError),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.snackBar.open(ERROR_MESSAGE, 'Close'));
  }

  private getLoadingStream(): Observable<boolean> {
    return combineLatest([
      this.store.pipe(select(selectDetailLoading)),
      this.store.pipe(select(selectLoading))
    ]).pipe(map(([loadingDetail, loading]) => loadingDetail || loading));
  }
}
