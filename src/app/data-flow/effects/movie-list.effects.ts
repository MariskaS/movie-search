import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, delay, map, mergeMap, withLatestFrom} from 'rxjs/operators';

import {of} from 'rxjs';
import {MovieService} from '../../core/services/movie.service';
import {LoadMovieList, LoadMovieListFail, LoadMovieListSuccess} from '../actions/movie.actions';
import {Store} from '@ngrx/store';
import {selectMovieListSearchRequest} from '../selectors/movie-list.selector';
import {State} from '../index';

@Injectable()
export class MovieListEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    delay(300),
    ofType(LoadMovieList),
    concatMap((action) => of(action).pipe(
      withLatestFrom(this.store.select(selectMovieListSearchRequest))
    )),
    mergeMap(([action, name]) => this.moviesService.getMovieList(name)
      .pipe(
        map((list) => (LoadMovieListSuccess({list}))),
        catchError((error) => of(LoadMovieListFail({error})))
      ))
    )
  );

  constructor(private actions$: Actions,
              private moviesService: MovieService,
              private store: Store<State>) {
  }
}
