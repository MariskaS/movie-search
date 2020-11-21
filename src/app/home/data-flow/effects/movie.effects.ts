import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {
  LoadMovieDetail,
  LoadMovieDetailFail,
  LoadMovieDetailSuccess,
  LoadMovieList,
  LoadMovieListFail,
  LoadMovieListSuccess
} from '../actions/movie.actions';
import {MovieService} from '../../services/movie.service';
import {of} from 'rxjs';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(LoadMovieList),
    mergeMap(() => this.moviesService.getCoachMovieList()
      .pipe(
        map((list) => (LoadMovieListSuccess({list}))),
        catchError((error) => of(LoadMovieListFail({error})))
      ))
    )
  );

  loadMovieDetail$ = createEffect(() => this.actions$.pipe(
    ofType(LoadMovieDetail),
    switchMap((action) => this.moviesService.getMovieById(action.id)
      .pipe(
        map((detail) => (LoadMovieDetailSuccess({detail}))),
        catchError((error) => of(LoadMovieDetailFail({error})))
      ))
    )
  );

  constructor(private actions$: Actions,
              private moviesService: MovieService) {
  }
}
