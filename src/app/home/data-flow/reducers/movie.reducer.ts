import {Action, createReducer, on} from '@ngrx/store';
import {MovieListItem} from '../../../interfaces';
import {LoadMovieList, LoadMovieListFail, LoadMovieListSuccess} from '../actions/movie.actions';

export interface State {
  list: MovieListItem[];
  error: any;
  loading: boolean;
}

export const MovieKey = 'movie';

const initialState: State = {
  list: [],
  error: null,
  loading: false
};

const movieReducer = createReducer(
  initialState,
  on(LoadMovieList, (state) => ({
    ...state,
    loading: true
  })),
  on(LoadMovieListSuccess, (state, {list}) => ({
    ...state,
    error: null,
    list,
    loading: false
  })),
  on(LoadMovieListFail, (state, {error}) => ({
    ...state,
    error,
    list: [],
    loading: false
  }))
);

export function reducer(state: State, action: Action): any {
  return movieReducer(state, action);
}
