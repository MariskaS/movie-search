import {Action, createReducer, on} from '@ngrx/store';
import {CloseSideNav, OpenSideNav, ToggleSideNav} from '../actions/sidenav.actions';
import {CloseSearchBar, ShowSearchBar} from '../actions/searchBar.actions';

export interface State {
  showSideNav: boolean;
  showSearchBox: boolean;
}

export const ApplicationStatusKey = 'status';

const initialState: State = {
  showSideNav: false,
  showSearchBox: false,
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
  })),
  on(ShowSearchBar, (state) => ({
    ...state,
    showSearchBox: true,
  })),
  on(CloseSearchBar, (state) => ({
    ...state,
    showSearchBox: false,
  }))
);

export function reducer(state: State, action: Action): any {
  return applicationStatusReducer(state, action);
}
