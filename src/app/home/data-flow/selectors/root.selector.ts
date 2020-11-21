import {createFeatureSelector} from '@ngrx/store';
import * as fromRoot from '../index';

export const selectHomeModuleState = createFeatureSelector<fromRoot.State>(
  fromRoot.stateFeatureKey
);
