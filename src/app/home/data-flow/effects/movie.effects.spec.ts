import {TestBed} from '@angular/core/testing';
import {MovieEffects} from './movie.effects';
import {BehaviorSubject, ReplaySubject, throwError} from 'rxjs';
import {provideMockActions} from '@ngrx/effects/testing';
import {MovieService} from '../../services/movie.service';
import {
  LoadMovieDetail,
  LoadMovieDetailFail,
  LoadMovieDetailSuccess,
  LoadMovieList,
  LoadMovieListFail,
  LoadMovieListSuccess
} from '../actions/movie.actions';
import {Action} from '@ngrx/store';
import SpyObj = jasmine.SpyObj;

describe('MovieEffects', () => {
  let actions: ReplaySubject<any>;
  let effects: MovieEffects;
  let movieService: SpyObj<MovieService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieEffects,
        {
          provide: MovieService,
          useValue: jasmine.createSpyObj(MovieService, [
            'getCoachMovieList', 'getMovieById'
          ])
        },
        provideMockActions(() => actions)
      ]
    });

    movieService = TestBed.inject(MovieService) as SpyObj<MovieService>;
    effects = TestBed.inject(MovieEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadMovies$', () => {
    it('should despatch LoadMovieListSuccess with list', () => {
      actions = new ReplaySubject(1);
      const value = [];
      movieService.getCoachMovieList.and.returnValue(new BehaviorSubject(value));
      const loadMovieListAction = LoadMovieList;
      actions.next(loadMovieListAction);
      effects.loadMovies$.subscribe((result: Action) => {
        expect(result).toEqual(LoadMovieListSuccess({list: value}));
      });
    });

    it('should despatch LoadMovieListFail with error', () => {
      actions = new ReplaySubject(1);
      const value = new Error();
      movieService.getCoachMovieList.and.returnValue(throwError(value));
      const loadMovieListAction = LoadMovieList;
      actions.next(loadMovieListAction);
      effects.loadMovies$.subscribe((result: Action) => {
        expect(result).toEqual(LoadMovieListFail({error: value}));
      });
    });
  });

  describe('loadMovieDetail$', () => {
    it('should despatch LoadMovieDetailSuccess with detail', () => {
      actions = new ReplaySubject(1);
      const value = null;
      movieService.getMovieById.and.returnValue(new BehaviorSubject(value));
      const loadMovieDetailAction = LoadMovieDetail({id: '1'});
      actions.next(loadMovieDetailAction);
      effects.loadMovieDetail$.subscribe((result: Action) => {
        expect(result).toEqual(LoadMovieDetailSuccess({detail: value}));
      });
    });

    it('should despatch LoadMovieDetailFail with error', () => {
      actions = new ReplaySubject(1);
      const value = new Error();
      movieService.getMovieById.and.returnValue(throwError(value));
      const loadMovieDetailAction = LoadMovieDetail({id: '1'});
      actions.next(loadMovieDetailAction);
      effects.loadMovieDetail$.subscribe((result: Action) => {
        expect(result).toEqual(LoadMovieDetailFail({error: value}));
      });
    });
  });
});
