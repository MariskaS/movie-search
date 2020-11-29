import {MovieListItem} from '../../../core/interfaces';
import {reducer} from './movie-detail.reducer';
import {LoadMovieDetail, LoadMovieDetailFail, LoadMovieDetailSuccess} from '../actions/movie-detail.actions';

describe('Reducer: movieDetailReducer', () => {
  it('should have loading set to true', () => {
    const state = {
      detail: null,
      error: null,
      loading: false
    };
    const action = LoadMovieDetail;
    const expected = {...state, loading: true};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should have loading set to false and fill detail', () => {
    const state = {
      detail: null,
      error: null,
      loading: true
    };
    const detail = {
      id: '1',
      imgUrl: 'test',
      title: 'test',
      year: 'test'
    } as MovieListItem;

    const action = {
      type: LoadMovieDetailSuccess.type,
      detail
    };
    const expected = {...state, detail, loading: false};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should have loading set to false, clear detail and fill an error', () => {
    const state = {
      detail: null,
      error: null,
      loading: true
    };
    const error = new Error();
    const action = {
      type: LoadMovieDetailFail.type,
      error,
    };
    const expected = {...state, detail: null, error, loading: false};
    expect(reducer(state, action)).toEqual(expected);
  });

});
