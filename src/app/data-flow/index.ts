import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromApplicationStatus from './reducers/applicationStatus.reducer';

export interface State {
  [fromApplicationStatus.ApplicationStatusKey]: fromApplicationStatus.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromApplicationStatus.ApplicationStatusKey]: fromApplicationStatus.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
