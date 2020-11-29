import {createSelector} from '@ngrx/store';
import {selectDetailError, selectDetailLoading} from './movie-detail.selector';
import {selectMovieListError, selectMovieListLoading} from '../../../data-flow/selectors/movie-list.selector';

export const selectLoadingState = createSelector(
  selectDetailLoading,
  selectMovieListLoading,
  (movieDetailLoading, movieListLoading) => movieDetailLoading || movieListLoading
);

export const selectErrorStatus = createSelector(
  selectDetailError,
  selectMovieListError,
  (movieDetailError, movieListError) => !!(movieDetailError || movieListError)
);
