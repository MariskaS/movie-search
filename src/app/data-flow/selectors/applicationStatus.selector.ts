import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRoot from '../index';
import * as fromApplicationStatus from '../reducers/applicationStatus.reducer';


export const selectApplicationStatus = createFeatureSelector<fromRoot.State, fromApplicationStatus.State>(
  fromApplicationStatus.ApplicationStatusKey
);

export const selectSideNavOpen = createSelector(selectApplicationStatus, (state) => state.showSideNav);
