import {reducer} from './applicationStatus.reducer';
import {CloseSideNav, OpenSideNav, ToggleSideNav} from '../actions/sidenav.actions';

describe('Reducer: applicationStatusReducer', () => {
  it('should have a showSideNav toggled', () => {
    const state = {showSideNav: false};
    const action = ToggleSideNav;
    const expected = {showSideNav: true};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should have a showSideNav opened', () => {
    const state = {showSideNav: false};
    const action = OpenSideNav;
    const expected = {showSideNav: true};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should have a showSideNav opened', () => {
    const state = {showSideNav: true};
    const action = CloseSideNav;
    const expected = {showSideNav: false};
    expect(reducer(state, action)).toEqual(expected);
  });
});
