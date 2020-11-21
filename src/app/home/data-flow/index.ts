import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromMovie from './reducers/movie.reducer';
import * as fromMovieDetail from './reducers/movie-detail.reducer';

export const stateFeatureKey = 'home-module';

export interface State {
  [fromMovie.MovieKey]: fromMovie.State;
  [fromMovieDetail.featureStateKey]: fromMovieDetail.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromMovie.MovieKey]: fromMovie.reducer,
  [fromMovieDetail.featureStateKey]: fromMovieDetail.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
