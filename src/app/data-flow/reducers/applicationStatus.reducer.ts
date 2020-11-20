import {Action, createReducer, on} from '@ngrx/store';
import {CloseSideNav, OpenSideNav, ToggleSideNav} from '../actions/sidenav.actions';

export interface State {
  showSideNav: boolean;
}

export const ApplicationStatusKey = 'status';

const initialState: State = {
  showSideNav: false
};

const applicationStatusReducer = createReducer(
  initialState,
  on(ToggleSideNav, (state) => ({
    ...state,
    showSideNav: !state.showSideNav
  })),
  on(OpenSideNav, (state) => ({
    ...state,
    showSideNav: true
  })),
  on(CloseSideNav, (state) => ({
    ...state,
    showSideNav: false
  }))
);

export function reducer(state: State, action: Action): any {
  return applicationStatusReducer(state, action);
}
