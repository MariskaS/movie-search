import {selectSearchBarOpen, selectSideNavOpen} from './applicationStatus.selector';

describe('Application status selectors', () => {
  it('should return side nav status', () => {
    expect(selectSideNavOpen.projector({showSideNav: true})).toBe(true);
  });
  it('should return search bar status', () => {
    expect(selectSearchBarOpen.projector({showSearchBox: false})).toBe(false);
  });
});
