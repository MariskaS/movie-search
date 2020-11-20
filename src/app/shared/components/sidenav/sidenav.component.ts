import { Component, OnInit } from '@angular/core';
import {sideNavigationList} from '../../../mockData';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavList: any[] = sideNavigationList;

  constructor() { }

  ngOnInit(): void {
  }

}
