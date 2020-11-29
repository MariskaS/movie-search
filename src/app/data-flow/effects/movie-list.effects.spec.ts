import {TestBed} from '@angular/core/testing';

import {BehaviorSubject, ReplaySubject, throwError} from 'rxjs';
import {provideMockActions} from '@ngrx/effects/testing';

import {
  LoadMovieList,
  LoadMovieListFail,
  LoadMovieListSuccess
} from '../actions/movie.actions';
import {Action, Store} from '@ngrx/store';
import SpyObj = jasmine.SpyObj;
import {MovieListEffects} from './movie-list.effects';
import {MovieService} from '../../core/services/movie.service';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {selectMovieListSearchRequest} from '../selectors/movie-list.selector';
import {DEFAULT_SEARCH_MOVIE_NAME} from '../../core/constants';
import * as fromRoot from '../../data-flow';

describe('MovieEffects', () => {
  let actions: ReplaySubject<any>;
  let effects: MovieListEffects;
  let movieService: SpyObj<MovieService>;
  let mockStore: MockStore<fromRoot.State>;
  let mockSelectMovieListSearchRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieListEffects,
        {
          provide: MovieService,
          useValue: jasmine.createSpyObj(MovieService, [
            'getMovieList'
          ])
        },
        provideMockActions(() => actions),
        provideMockStore({
          selectors: [
            {selector: selectMovieListSearchRequest, value: ''},
          ]
        })
      ]
    });

    mockStore = TestBed.inject(Store) as MockStore<fromRoot.State>;
    movieService = TestBed.inject(MovieService) as SpyObj<MovieService>;
    mockSelectMovieListSearchRequest = mockStore.overrideSelector(selectMovieListSearchRequest, DEFAULT_SEARCH_MOVIE_NAME)
    effects = TestBed.inject(MovieListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadMovies$', () => {
    it('should despatch LoadMovieListSuccess with list', () => {
      actions = new ReplaySubject(1);
      const value = [];
      movieService.getMovieList.and.returnValue(new BehaviorSubject(value));
      const loadMovieListAction = LoadMovieList({name: 'abc'});
      actions.next(loadMovieListAction);
      effects.loadMovies$.subscribe((result: Action) => {
        expect(result).toEqual(LoadMovieListSuccess({list: value}));
      });
    });

    it('should despatch LoadMovieListFail with error', () => {
      actions = new ReplaySubject(1);
      const value = new Error();
      movieService.getMovieList.and.returnValue(throwError(value));
      const loadMovieListAction = LoadMovieList({name: 'abc'});
      actions.next(loadMovieListAction);
      effects.loadMovies$.subscribe((result: Action) => {
        expect(result).toEqual(LoadMovieListFail({error: value}));
      });
    });
  });
});
