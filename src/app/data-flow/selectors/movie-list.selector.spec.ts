import {
  selectMovieList,
  selectMovieListError,
  selectMovieListLoading,
  selectMovieListSearchRequest,
  selectMovieListState
} from './movie-list.selector';
import {State} from '../reducers/movie-list.reducer';
import {DEFAULT_SEARCH_MOVIE_NAME} from '../../core/constants';

describe('Movie list selectors', () => {
  describe('selectMovieListState', () => {
    it('should return initialState status', () => {
      const initialState: State = {
        list: [],
        error: null,
        loading: false,
        name: DEFAULT_SEARCH_MOVIE_NAME
      };
      expect(selectMovieListState.projector(initialState)).toEqual(initialState);
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

  describe('selectMovieListSearchRequest', () => {
    it('should return list status', () => {
      expect(selectMovieListSearchRequest.projector({name: ''})).toEqual('');
    });
  });

  describe('selectMovieListError', () => {
    it('should return error status', () => {
      expect(selectMovieListError.projector({error: null})).toBe(null);
    });
  });
});
