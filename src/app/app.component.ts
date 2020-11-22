import {Component, HostListener, Inject, OnInit} from '@angular/core';

import {select, Store} from '@ngrx/store';
import * as fromRoot from './data-flow';
import {Observable} from 'rxjs';

import {selectSideNavOpen} from './data-flow/selectors/applicationStatus.selector';
import {CloseSideNav, OpenSideNav} from './data-flow/actions/sidenav.actions';
import {WINDOW} from './shared/services/window.service';
import {IconRegistryService} from './shared/services/icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSideNav$: Observable<boolean>;
  previousWidth: number;
  sideNavMode = 'side';

  constructor(private store: Store<fromRoot.State>,
              @Inject(WINDOW) private window: Window,
              private iconRegistryService: IconRegistryService) {
    this.iconRegistryService.init();
  }

  ngOnInit(): void {
    this.showSideNav$ = this.store.pipe(select(selectSideNavOpen));
    this.previousWidth = this.window.innerWidth;

    if (this.previousWidth >= 600) {
      this.store.dispatch(OpenSideNav());
    } else {
      this.store.dispatch(CloseSideNav());
      this.sideNavMode = 'over';
    }
  }

  @HostListener('window:resize')
  handleResize(): void {
    this.checkSize();
  }

  private checkSize(): void {
    const width = this.window.innerWidth;

    if (this.previousWidth >= 600 && width < 600) {
      this.sideNavMode = 'over';
      this.previousWidth = width;
      this.store.dispatch(CloseSideNav());
    }

    if (this.previousWidth < 600 && width >= 600) {
      this.sideNavMode = 'side';
      this.previousWidth = width;
      this.store.dispatch(OpenSideNav());
    }
  }
}
