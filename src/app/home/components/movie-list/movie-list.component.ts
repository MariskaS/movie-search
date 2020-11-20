import {Component, Input, OnInit} from '@angular/core';

import {MovieDetail, MovieListItem} from '../../../interfaces';
import {movieItem} from '../../../mockData';

import {MatDialog} from '@angular/material/dialog';
import {MovieDialogComponent} from '../movie-dialog/movie-dialog.component';
import {MovieService} from '../../services/movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: MovieListItem[];
  loading = false;

  constructor(public dialog: MatDialog,
              private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  openDialog(id: string): void {
    this.loading = true;

    this.movieService.getMovieById(id).subscribe((item) => {
      this.loading = false;
      this.dialog.open(MovieDialogComponent, {
        maxWidth: '840px',
        data: item
      });
    });
  }

}
