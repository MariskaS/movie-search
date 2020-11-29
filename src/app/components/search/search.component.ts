import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSearchBarOpen} from '../../data-flow/selectors/applicationStatus.selector';
import {Observable, Subject} from 'rxjs';
import * as fromRoot from '../../data-flow';
import {CloseSearchBar, ShowSearchBar} from '../../data-flow/actions/searchBar.actions';
import {SEARCH_CLOSE_TOOLTIP} from '../../core/constants';
import {LoadMovieList} from '../../data-flow/actions/movie.actions';
import {selectMovieListSearchRequest} from '../../data-flow/selectors/movie-list.selector';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput') searchInput: ElementRef;
  showSearchBar$: Observable<boolean>;
  closeTooltip: string = SEARCH_CLOSE_TOOLTIP;
  movieName: string;
  destroy$ = new Subject<void>();

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.showSearchBar$ = this.store.pipe(select(selectSearchBarOpen));
    this.store.pipe(select(selectMovieListSearchRequest), takeUntil(this.destroy$)).subscribe((name) => {
      this.movieName = name;
    });
  }

  showSearchBar(): void {
    this.store.dispatch(ShowSearchBar());
  }

  closeSearchBar(): void {
    this.store.dispatch(CloseSearchBar());

    if (this.searchInput.nativeElement.value) {
      this.store.dispatch(LoadMovieList({name: ''}));
    }
  }

  movieNameChange($event: string): void {
    if ($event.length >= 3) {
      this.movieName = $event;
      this.store.dispatch(LoadMovieList({name: this.movieName}));
    }
  }
}
