import {Component, Input, Output, EventEmitter} from '@angular/core';

import {MovieListItem} from '../../../core/interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: MovieListItem[];
  @Output() clickCard = new EventEmitter<string>();

  handleClick(id: string): void {
    this.clickCard.emit(id);
  }
}
