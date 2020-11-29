import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromMovieDetail from './reducers/movie-detail.reducer';

export const stateFeatureKey = 'home-module';

export interface State {
  [fromMovieDetail.featureStateKey]: fromMovieDetail.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromMovieDetail.featureStateKey]: fromMovieDetail.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
