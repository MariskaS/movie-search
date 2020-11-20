import { Component, OnInit } from '@angular/core';

import {MOVIE} from '../../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = MOVIE.title;

  constructor() { }

  ngOnInit(): void {
  }

}
