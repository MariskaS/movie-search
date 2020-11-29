import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromMovie from '../reducers/movie-list.reducer';
import * as fromRoot from '../index';

export const selectMovieListState = createFeatureSelector<fromRoot.State, fromMovie.State>(
  fromMovie.MovieKey
);
export const selectMovieListLoading = createSelector(selectMovieListState, (state) => state.loading);
export const selectMovieList = createSelector(selectMovieListState, (state) => state.list);
export const selectMovieListError = createSelector(selectMovieListState, (state) => state.error);
export const selectMovieListSearchRequest = createSelector(selectMovieListState, (state) => state.name);
