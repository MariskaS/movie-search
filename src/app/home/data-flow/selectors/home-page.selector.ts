import {createSelector} from '@ngrx/store';
import {selectDetailError, selectDetailLoading} from './movie-detail.selector';
import {selectError, selectLoading} from './movie.selector';

export const selectLoadingState = createSelector(
  selectDetailLoading,
  selectLoading,
  (movieDetailLoading, movieListLoading) => movieDetailLoading || movieListLoading
);

export const selectErrorStatus = createSelector(
  selectDetailError,
  selectError,
  (movieDetailError, movieListError) => !!(movieDetailError || movieListError)
);
