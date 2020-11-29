import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  LoadMovieDetail,
  LoadMovieDetailFail,
  LoadMovieDetailSuccess
} from '../actions/movie-detail.actions';
import {MovieService} from '../../../core/services/movie.service';
import {of} from 'rxjs';

@Injectable()
export class MovieDetailEffects {
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
