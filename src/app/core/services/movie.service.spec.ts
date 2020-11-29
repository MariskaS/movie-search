import {TestBed} from '@angular/core/testing';

import {MovieService} from './movie.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {
  mockOMDBAPIMovieDetailsResponse,
  mockOMDBAPIMovieDetailsResponseMapped,
  mockOMDBAPISearchResponse
} from '../../../tests/stubs/mockData';

describe('MovieService', () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movie list mapped', () => {
    service.getMovieList('coach').subscribe((list) => {
      expect(list.length).toBe(mockOMDBAPISearchResponse.Search.length);
    });
    httpTestingController.expectOne({method: 'GET'}).flush(mockOMDBAPISearchResponse);
    httpTestingController.verify();
  });

  it('should get movie detail mapped', () => {
    service.getMovieById('1').subscribe((item) => {
      expect(item).toEqual(mockOMDBAPIMovieDetailsResponseMapped);
    });
    httpTestingController.expectOne({method: 'GET'}).flush(mockOMDBAPIMovieDetailsResponse);
    httpTestingController.verify();
  });
});
