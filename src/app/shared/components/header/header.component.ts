import {Component} from '@angular/core';
import {PROJECT} from '../../../constants';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../data-flow';
import {ToggleSideNav} from '../../../data-flow/actions/sidenav.actions';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  projectName = PROJECT.name;
  toggleIcon = false;

  constructor(private store: Store<fromRoot.State>,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/close.svg'));
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/menu.svg'));

  }

  handleClick(): void {
    this.store.dispatch(ToggleSideNav());
    this.toggleIcon = !this.toggleIcon;
  }

}
