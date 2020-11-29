import {reducer, State} from './movie-list.reducer';
import {LoadMovieList, LoadMovieListFail, LoadMovieListSuccess} from '../actions/movie.actions';
import {MovieListItem} from '../../core/interfaces';
import {DEFAULT_SEARCH_MOVIE_NAME} from '../../core/constants';


describe('Reducer: movieReducer', () => {
  let initialState: State;

  beforeEach(() => {
    initialState = {
      list: [],
      error: null,
      loading: false,
      name: DEFAULT_SEARCH_MOVIE_NAME
    } as State;
  });

  it('should have loading set to true', () => {
    const action = LoadMovieList;
    const expected = {...initialState, loading: true, name: ''};
    expect(reducer({...initialState}, action)).toEqual(expected);
  });

  it('should have loading set to false and fill list', () => {
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
    const expected = {...initialState, list, loading: false};
    const actualState = {...initialState, loading: true};
    expect(reducer(actualState, action)).toEqual(expected);
  });

  it('should have loading set to false, clear list and fill an error', () => {
    const error = new Error();
    const action = {
      type: LoadMovieListFail.type,
      error,
    };
    const expected = {...initialState, list: [], error, loading: false};
    const actualState = {...initialState, loading: true};
    expect(reducer(actualState, action)).toEqual(expected);
  });

});
