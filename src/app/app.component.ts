import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from './data-flow';
import {Observable} from 'rxjs';
import {selectSideNavOpen} from './data-flow/selectors/applicationStatus.selector';
import {CloseSideNav, OpenSideNav} from './data-flow/actions/sidenav.actions';
import {WINDOW} from './shared/services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSideNav$: Observable<boolean>;
  previousWidth: number;

  constructor(private store: Store<fromRoot.State>,
              @Inject(WINDOW) private window: Window) {
  }

  ngOnInit(): void {
    this.showSideNav$ = this.store.pipe(select(selectSideNavOpen));
    this.previousWidth = this.window.innerWidth;
    if (this.previousWidth >= 600) {
      this.store.dispatch(OpenSideNav());
    } else {
      this.store.dispatch(CloseSideNav());
    }
  }

  @HostListener('window:resize')
  checkSize(): void {
    const width = this.window.innerWidth;

    if (this.previousWidth >= 600 && width < 600) {
      this.previousWidth = width;
      this.store.dispatch(CloseSideNav());
    }

    if (this.previousWidth < 600 && width >= 600) {
      this.previousWidth = width;
      this.store.dispatch(OpenSideNav());
    }
  }

}
