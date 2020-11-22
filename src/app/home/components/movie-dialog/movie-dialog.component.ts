import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  MOVIE_DIALOG_LABEL_ACTORS, MOVIE_DIALOG_LABEL_COUNTRY,
  MOVIE_DIALOG_LABEL_DIRECTOR,
  MOVIE_DIALOG_LABEL_GENRE, MOVIE_DIALOG_LABEL_LANGUAGE, MOVIE_DIALOG_LABEL_PLOT,
  MOVIE_DIALOG_LABEL_RATED,
  MOVIE_DIALOG_LABEL_RELEASED,
  MOVIE_DIALOG_LABEL_RUNTIME, MOVIE_DIALOG_LABEL_WRITER, MOVIE_DIALOG_NO_DATA
} from '../../../constants';
import {MovieDetail} from '../../../interfaces';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent {
  labelRated = MOVIE_DIALOG_LABEL_RATED;
  labelReleased = MOVIE_DIALOG_LABEL_RELEASED;
  labelRuntime = MOVIE_DIALOG_LABEL_RUNTIME;
  labelGenre = MOVIE_DIALOG_LABEL_GENRE;
  labelDirector = MOVIE_DIALOG_LABEL_DIRECTOR;
  labelWriter = MOVIE_DIALOG_LABEL_WRITER;
  labelActors = MOVIE_DIALOG_LABEL_ACTORS;
  labelPlot = MOVIE_DIALOG_LABEL_PLOT;
  labelLanguage = MOVIE_DIALOG_LABEL_LANGUAGE;
  labelCountry = MOVIE_DIALOG_LABEL_COUNTRY;
  noData = MOVIE_DIALOG_NO_DATA;

  constructor(@Inject(MAT_DIALOG_DATA) public data: MovieDetail,
              private dialogRef: MatDialogRef<MovieDetail>) {
  }

  handleClick(): void {
    this.dialogRef.close();
  }
}
