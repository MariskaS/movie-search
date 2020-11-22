import {selectMovieList, selectMovieListError, selectMovieListLoading, selectMovieListState} from './movie.selector';
import * as fromMovie from '../reducers/movie.reducer';
import {State} from '../reducers/movie.reducer';

describe('Movie list selectors', () => {
  describe('selectMovieListState', () => {
    it('should return initialState status', () => {
      const initialState: State = {
        list: [],
        error: null,
        loading: false
      };
      expect(selectMovieListState.projector({[fromMovie.MovieKey]: initialState})).toEqual(initialState);
    });
  });

  describe('selectMovieListLoading', () => {
    it('should return loading status', () => {
      expect(selectMovieListLoading.projector({loading: true})).toBe(true);
    });
  });

  describe('selectMovieList', () => {
    it('should return list status', () => {
      expect(selectMovieList.projector({list: []})).toEqual([]);
    });
  });

  describe('selectMovieListError', () => {
    it('should return error status', () => {
      expect(selectMovieListError.projector({error: null})).toBe(null);
    });
  });
});
