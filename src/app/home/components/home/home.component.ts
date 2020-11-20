import { Component, OnInit } from '@angular/core';

import {MOVIE, MOVIE_LIST_NO_DATA} from '../../../constants';
import {Observable} from 'rxjs';
import {MovieListItem} from '../../../interfaces';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$: Observable<MovieListItem[]>;
  title: string = MOVIE.title;
  noMovies: string = MOVIE_LIST_NO_DATA;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getCoachMovieList();
  }

}
