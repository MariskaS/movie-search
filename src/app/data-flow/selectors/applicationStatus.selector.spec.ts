import {selectSideNavOpen} from './applicationStatus.selector';

describe('Application status selectors', () => {
  describe('selectSideNavOpen', () => {
    it('should return side nav status', () => {
      expect(selectSideNavOpen.projector({showSideNav: true})).toBe(true);
    });
  });
});
