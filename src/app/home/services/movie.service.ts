import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {MovieDetail, MovieListItem, OMDBAPIMovieDetailsResponse, OMDBAPISearchResponse, OMDBSearchItem} from '../../interfaces';
import {Observable} from 'rxjs';


const mapMovieItem = (item: OMDBSearchItem): MovieListItem => ({
  id: item.imdbID,
  title: item.Title,
  year: item.Year,
  imgUrl: item.Poster
});

const mapMovieDetail = (res: OMDBAPIMovieDetailsResponse): MovieDetail => ({
  id: res.imdbID,
  title: res.Title,
  year: res.Year,
  imgUrl: res.Poster,
  rated: res.Rated,
  released: res.Released,
  runtime: res.Runtime,
  genre: res.Genre,
  director: res.Director,
  writer: res.Writer,
  actors: res.Actors,
  plot: res.Plot,
  language: res.Language,
  country: res.Country,
});

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  host = `http://www.omdbapi.com/?`;
  apiKey = `&apikey=a4d98298`;

  constructor(private httpClient: HttpClient) {
  }

  getCoachMovieList(): Observable<MovieListItem[]> {
    return this.httpClient
      .get<OMDBAPISearchResponse>(`${this.host}s=coach${this.apiKey}`)
      .pipe(map((res) => {
        const movieListItems = res.Search.map(mapMovieItem);
        return movieListItems;
      }));
  }

  getMovieById(id: string): Observable<MovieDetail> {
    return this.httpClient
      .get<OMDBAPIMovieDetailsResponse>(`${this.host}i=${id}${this.apiKey}`)
      .pipe(map(mapMovieDetail));
  }
}
