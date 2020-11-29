import {TestBed} from '@angular/core/testing';
import {MovieDetailEffects} from './movie-detail.effects.';
import {BehaviorSubject, ReplaySubject, throwError} from 'rxjs';
import {provideMockActions} from '@ngrx/effects/testing';
import {MovieService} from '../../../core/services/movie.service';
import {
  LoadMovieDetail,
  LoadMovieDetailFail,
  LoadMovieDetailSuccess,
} from '../actions/movie-detail.actions';
import {Action} from '@ngrx/store';
import SpyObj = jasmine.SpyObj;

describe('MovieEffects', () => {
  let actions: ReplaySubject<any>;
  let effects: MovieDetailEffects;
  let movieService: SpyObj<MovieService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieDetailEffects,
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
    effects = TestBed.inject(MovieDetailEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
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
