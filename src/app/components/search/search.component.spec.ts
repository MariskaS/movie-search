import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {selectSearchBarOpen} from '../../data-flow/selectors/applicationStatus.selector';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../home/data-flow';
import {selectMovieListSearchRequest} from '../../data-flow/selectors/movie-list.selector';
import {LoadMovieList} from '../../data-flow/actions/movie.actions';
import {CloseSearchBar, ShowSearchBar} from '../../data-flow/actions/searchBar.actions';
import {DEFAULT_SEARCH_MOVIE_NAME} from '../../core/constants';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockStore: MockStore<fromRoot.State>;
  let mockDispatch;
  let mockSelectSearchBarState;
  let mockSelectMovieListSearchRequestState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({
          selectors: [
            {selector: selectSearchBarOpen, value: false},
            {selector: selectMovieListSearchRequest, value: ''},
          ]
        })]
    });

    mockStore = TestBed.inject(Store) as MockStore<fromRoot.State>;
    mockDispatch = spyOn(mockStore, 'dispatch');
    mockSelectSearchBarState = mockStore.overrideSelector(selectSearchBarOpen, false);
    mockSelectMovieListSearchRequestState = mockStore.overrideSelector(selectMovieListSearchRequest, DEFAULT_SEARCH_MOVIE_NAME);

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open Search Bar when a loop button is clicked', () => {
    component.showSearchBar();
    expect(mockDispatch).toHaveBeenCalledWith(
      jasmine.objectContaining(ShowSearchBar())
    );
  });

  it('should close and clear Search Bar when a X button is clicked and input has value', () => {
    fixture.componentInstance.searchInput = {
      nativeElement: {
        value: 'abc'
      }
    };
    component.closeSearchBar();
    expect(mockDispatch).toHaveBeenCalledWith(
      jasmine.objectContaining(CloseSearchBar())
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      jasmine.objectContaining(LoadMovieList({name: ''}))
    );
  });

  it('should only close Search Bar when a X button is clicked and input has no value', () => {
    fixture.componentInstance.searchInput = {
      nativeElement: {
        value: ''
      }
    };
    component.closeSearchBar();
    expect(mockDispatch).toHaveBeenCalledWith(
      jasmine.objectContaining(CloseSearchBar())
    );
    expect(mockDispatch).not.toHaveBeenCalledWith(
      jasmine.objectContaining(LoadMovieList({name: ''}))
    );
  });

  it('should change loaded movie list if set >=3 symbols in an input', () => {
    const movieName = 'testMovieName';
    component.movieNameChange(movieName);
    expect(mockDispatch).toHaveBeenCalledWith(
      jasmine.objectContaining(LoadMovieList({name: movieName}))
    );
  });

  it('should no change loaded movie list if set <3 symbols in an input', () => {
    const movieName = 'te';
    component.movieNameChange(movieName);
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
