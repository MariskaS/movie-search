import {Action, createReducer, on} from '@ngrx/store';
import {LoadMovieList, LoadMovieListFail, LoadMovieListSuccess} from '../actions/movie.actions';
import {MovieListItem} from '../../core/interfaces';
import {DEFAULT_SEARCH_MOVIE_NAME} from '../../core/constants';

export interface State {
  list: MovieListItem[];
  error: any;
  loading: boolean;
  name: string;
}

export const MovieKey = 'movie';

const initialState: State = {
  list: [],
  error: null,
  loading: false,
  name: DEFAULT_SEARCH_MOVIE_NAME
};

const movieListReducer = createReducer(
  initialState,
  on(LoadMovieList, (state, {name}) => ({
    ...state,
    loading: true,
    name
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
  return movieListReducer(state, action);
}
