import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromMovie from './reducers/movie-list.reducer';
import * as fromApplicationStatus from './reducers/applicationStatus.reducer';

export interface State {
  [fromMovie.MovieKey]: fromMovie.State;
  [fromApplicationStatus.ApplicationStatusKey]: fromApplicationStatus.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromMovie.MovieKey]: fromMovie.reducer,
  [fromApplicationStatus.ApplicationStatusKey]: fromApplicationStatus.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
