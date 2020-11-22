import {createSelector} from '@ngrx/store';
import * as fromMovie from '../reducers/movie.reducer';
import {selectHomeModuleState} from './root.selector';

export const selectMovieListState = createSelector(selectHomeModuleState, (state) => state[fromMovie.MovieKey]);
export const selectMovieListLoading = createSelector(selectMovieListState, (state) => state.loading);
export const selectMovieList = createSelector(selectMovieListState, (state) => state.list);
export const selectMovieListError = createSelector(selectMovieListState, (state) => state.error);
