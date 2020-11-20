import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PROJECT} from '../../../constants';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../data-flow';
import {selectSideNavOpen} from '../../../data-flow/selectors/applicationStatus.selector';
import {OpenSideNav, ToggleSideNav} from '../../../data-flow/actions/sidenav.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  projectName = PROJECT.name;
  toggleIcon = false;

  constructor(private store: Store<fromRoot.State>) {
  }

  handleClick(): void {
    this.store.dispatch(ToggleSideNav());
    this.toggleIcon = !this.toggleIcon;
  }

}
