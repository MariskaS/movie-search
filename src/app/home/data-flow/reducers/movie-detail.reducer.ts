import {Action, createReducer, on} from '@ngrx/store';
import {MovieDetail} from '../../../interfaces';
import {
  LoadMovieDetail,
  LoadMovieDetailFail,
  LoadMovieDetailSuccess,
} from '../actions/movie.actions';

export interface State {
  detail: MovieDetail;
  error: any;
  loading: boolean;
}

export const featureStateKey = 'movie-detail';

const initialState: State = {
  detail: null,
  error: null,
  loading: false
};

const movieDetailReducer = createReducer(
  initialState,
  on(LoadMovieDetail, (state) => ({
    ...state,
    loading: true
  })),
  on(LoadMovieDetailSuccess, (state, {detail}) => ({
    ...state,
    error: null,
    detail,
    loading: false
  })),
  on(LoadMovieDetailFail, (state, {error}) => ({
    ...state,
    error,
    detail: null,
    loading: false
  }))
);

export function reducer(state: State, action: Action): any {
  return movieDetailReducer(state, action);
}
