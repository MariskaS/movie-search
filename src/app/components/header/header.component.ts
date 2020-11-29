import {Component} from '@angular/core';
import {PROJECT} from '../../core/constants';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../data-flow';
import {ToggleSideNav} from '../../data-flow/actions/sidenav.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  projectName = PROJECT.name;
  toggleIcon = false;

  constructor(private store: Store<fromRoot.State>) {}

  handleClick(): void {
    this.store.dispatch(ToggleSideNav());
    this.toggleIcon = !this.toggleIcon;
  }

}
