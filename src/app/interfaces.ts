export interface SideNavigationItem {
  id: string;
  url: string;
  name: string;
}

export interface MovieDetail {
  id: string;
  title: string;
  year: any;
  imgUrl: string;
  rated?: string;
  released?: string;
  runtime?: string;
  genre?: string;
  director?: string;
  writer?: string;
  actors?: string;
  plot?: string;
  language?: string;
  country?: string;
}

export interface MovieListItem {
  id: string;
  title: string;
  year: any;
  imgUrl: string;
}

export interface OMDBSearchItem {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface OMDBAPISearchResponse {
  Search: OMDBSearchItem[];
}

export interface OMDBAPIMovieDetailsResponse {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
}
