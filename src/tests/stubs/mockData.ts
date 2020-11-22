export const mockOMDBAPISearchResponse = {
  Search: [
    {
      Title: 'Coach Carter',
      Year: '2005',
      imdbID: 'tt0393162',
      Type: 'movie',
      Poster: 'https://img.jpg'
    },
    {
      Title: 'Balls Out: Gary the Tennis Coach',
      Year: '2009',
      imdbID: 'tt0787470',
      Type: 'movie',
      Poster: 'https://photo.jpg'
    }
  ]
};

export const mockOMDBAPIMovieDetailsResponse = {
  Title: 'Coach',
  Year: '2010',
  Rated: 'PG-13',
  Released: '08 Jun 2010',
  Runtime: '87 min',
  Genre: 'Comedy, Romance, Sport',
  Director: 'Will Frears',
  Writer: 'Will Frears (story), Jason Pugatch (screenplay), Jason Pugatch (story)',
  Actors: 'Hugh Dancy, Jonathan Gutierrez, Liane Balaban, Mamie Gummer',
  Plot: 'A slacker trust-fund type finds the motivation to pick up a job as the coach of middle school soccer team.',
  Language: 'English',
  Country: 'USA',
  Poster: 'https://media.jpg',
  imdbID: 'tt1334521',
};

export const mockOMDBAPIMovieDetailsResponseMapped = {
  id: mockOMDBAPIMovieDetailsResponse.imdbID,
  title: mockOMDBAPIMovieDetailsResponse.Title,
  year: mockOMDBAPIMovieDetailsResponse.Year,
  imgUrl: mockOMDBAPIMovieDetailsResponse.Poster,
  rated: mockOMDBAPIMovieDetailsResponse.Rated,
  released: mockOMDBAPIMovieDetailsResponse.Released,
  runtime: mockOMDBAPIMovieDetailsResponse.Runtime,
  genre: mockOMDBAPIMovieDetailsResponse.Genre,
  director: mockOMDBAPIMovieDetailsResponse.Director,
  writer: mockOMDBAPIMovieDetailsResponse.Writer,
  actors: mockOMDBAPIMovieDetailsResponse.Actors,
  plot: mockOMDBAPIMovieDetailsResponse.Plot,
  language: mockOMDBAPIMovieDetailsResponse.Language,
  country: mockOMDBAPIMovieDetailsResponse.Country,
};

