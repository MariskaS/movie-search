import {Component, Input, OnInit} from '@angular/core';

import {MovieListItem} from '../../../interfaces';

import {MatDialog} from '@angular/material/dialog';
import {MovieDialogComponent} from '../movie-dialog/movie-dialog.component';
import {MovieService} from '../../services/movie.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ERROR_MESSAGE} from '../../../constants';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: MovieListItem[];
  loading = false;

  constructor(public dialog: MatDialog,
              private movieService: MovieService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  openDialog(id: string): void {
    this.loading = true;

    this.movieService.getMovieById(id).subscribe((item) => {
      try {
        this.loading = false;
        this.dialog.open(MovieDialogComponent, {
          maxWidth: '840px',
          data: item
        });
      } catch (error) {
        this.snackBar.open(ERROR_MESSAGE, 'Close')
      }
    });
  }

}
