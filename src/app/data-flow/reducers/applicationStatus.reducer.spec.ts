import {reducer} from './applicationStatus.reducer';
import {CloseSideNav, OpenSideNav, ToggleSideNav} from '../actions/sidenav.actions';
import {CloseSearchBar, ShowSearchBar} from '../actions/searchBar.actions';

describe('Reducer: applicationStatusReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      showSideNav: false,
      showSearchBox: false,
    };
  });

  it('should have a Side Nav toggled', () => {
    const {showSideNav} = initialState;
    const action = ToggleSideNav;
    const expected = {showSideNav: true};
    expect(reducer(showSideNav, action)).toEqual(expected);
  });

  it('should have a Side Nav opened', () => {
    const {showSideNav} = initialState;
    const action = OpenSideNav;
    const expected = {showSideNav: true};
    expect(reducer(showSideNav, action)).toEqual(expected);
  });

  it('should have a Side Nav closed', () => {
    const {showSideNav = true} = initialState;
    const action = CloseSideNav;
    const expected = {showSideNav: false};
    expect(reducer(showSideNav, action)).toEqual(expected);
  });

  it('should have a Search Box opened', () => {
    const {showSearchBox} = initialState;
    const action = ShowSearchBar;
    const expected = {showSearchBox: true};
    expect(reducer(showSearchBox, action)).toEqual(expected);
  });

  it('should have a Search Box closed', () => {
    const {showSearchBox = true} = initialState;
    const action = CloseSearchBar;
    const expected = {showSearchBox: false};
    expect(reducer(showSearchBox, action)).toEqual(expected);
  });
});
