import {reducer} from './movie.reducer';
import {LoadMovieList, LoadMovieListFail, LoadMovieListSuccess} from '../actions/movie.actions';
import {MovieListItem} from '../../../interfaces';

describe('Reducer: movieReducer', () => {
  it('should have loading set to true', () => {
    const state = {
      list: [],
      error: null,
      loading: false
    };
    const action = LoadMovieList;
    const expected = {...state, loading: true};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should have loading set to false and fill list', () => {
    const state = {
      list: [],
      error: null,
      loading: true
    };
    const list = [
      {
        id: '1',
        imgUrl: 'test',
        title: 'test',
        year: 'test'
      } as MovieListItem
    ];

    const action = {
      type: LoadMovieListSuccess.type,
      list
    };
    const expected = {...state, list, loading: false};
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should have loading set to false, clear list and fill an error', () => {
    const state = {
      list: [],
      error: null,
      loading: true
    };
    const error = new Error();
    const action = {
      type: LoadMovieListFail.type,
      error,
    };
    const expected = {...state, list: [], error, loading: false};
    expect(reducer(state, action)).toEqual(expected);
  });

});
