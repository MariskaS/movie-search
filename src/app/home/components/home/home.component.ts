import { Component, OnInit } from '@angular/core';

import {ERROR_MESSAGE, MOVIE, MOVIE_LIST_NO_DATA} from '../../../constants';
import {Observable} from 'rxjs';
import {MovieListItem} from '../../../interfaces';
import {MovieService} from '../../services/movie.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$: Observable<MovieListItem[]>;
  title: string = MOVIE.title;
  noMovies: string = MOVIE_LIST_NO_DATA;

  constructor(private movieService: MovieService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getCoachMovieList();

    this.movies$.subscribe(value => {},
      err => this.snackBar.open(ERROR_MESSAGE, 'Close')
    );
  }

}
