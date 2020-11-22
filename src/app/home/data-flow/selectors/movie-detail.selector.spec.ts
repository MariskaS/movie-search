import {selectDetail, selectDetailError, selectDetailLoading, selectMovieDetailState} from './movie-detail.selector';
import * as fromMovieDetail from '../reducers/movie-detail.reducer';
import {State} from '../reducers/movie-detail.reducer';

describe('Movie detail selectors', () => {
  describe('selectMovieDetailState', () => {
    it('should return initialState status', () => {
      const initialState: State = {
        detail: null,
        error: null,
        loading: false
      };
      expect(selectMovieDetailState.projector({[fromMovieDetail.featureStateKey]: initialState})).toEqual(initialState);
    });
  });

  describe('selectDetailLoading', () => {
    it('should return loading status', () => {
      expect(selectDetailLoading.projector({loading: true})).toBe(true);
    });
  });

  describe('selectDetail', () => {
    it('should return list status', () => {
      expect(selectDetail.projector({detail: null})).toEqual(null);
    });
  });

  describe('selectDetailError', () => {
    it('should return error status', () => {
      expect(selectDetailError.projector({error: null})).toBe(null);
    });
  });
});
