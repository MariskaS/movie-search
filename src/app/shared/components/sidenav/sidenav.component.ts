import {Component} from '@angular/core';
import {sideNavigationList} from '../../../mockData';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  sidenavList: any[] = sideNavigationList;
}
