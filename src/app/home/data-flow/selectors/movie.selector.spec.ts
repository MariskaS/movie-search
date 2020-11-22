import {selectErrorStatus, selectLoadingState} from './home-page.selector';

describe('Home page selectors', () => {
  describe('selectErrorStatus', () => {
    it('should return error status', () => {
      expect(selectErrorStatus.projector(null, new Error())).toBe(true);
      expect(selectErrorStatus.projector(new Error(), null)).toBe(true);
      expect(selectErrorStatus.projector(null, null)).toBe(false);
    });
  });

  describe('selectLoadingState', () => {
    it('should return loading status', () => {
      expect(selectLoadingState.projector(true, false)).toBe(true);
      expect(selectLoadingState.projector(false, false)).toBe(false);
    });
  });
});
