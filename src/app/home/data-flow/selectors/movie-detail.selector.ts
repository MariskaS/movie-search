import {createSelector} from '@ngrx/store';
import * as fromMovieDetail from '../reducers/movie-detail.reducer';
import {selectHomeModuleState} from './root.selector';

export const selectMovieDetailState = createSelector(selectHomeModuleState, (state) => state[fromMovieDetail.featureStateKey]);
export const selectDetailLoading = createSelector(selectMovieDetailState, (state) => state.loading);
export const selectDetail = createSelector(selectMovieDetailState, (state) => state.detail);
export const selectDetailError = createSelector(selectMovieDetailState, (state) => state.error);
