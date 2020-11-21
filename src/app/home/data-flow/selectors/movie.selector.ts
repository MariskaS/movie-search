import {createSelector} from '@ngrx/store';
import * as fromMovie from '../reducers/movie.reducer';
import {selectHomeModuleState} from './root.selector';

export const selectMovieState = createSelector(selectHomeModuleState, (state) => state[fromMovie.MovieKey]);
export const selectLoading = createSelector(selectMovieState, (state) => state.loading);
export const selectList = createSelector(selectMovieState, (state) => state.list);
export const selectError = createSelector(selectMovieState, (state) => state.error);
