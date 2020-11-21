import {createAction, props} from '@ngrx/store';
import {MovieDetail, MovieListItem} from '../../../interfaces';

export const LoadMovieList = createAction('[MovieList] Load Movie List');
export const LoadMovieListSuccess = createAction('[MovieList] Load Movie List Success', props<{ list: MovieListItem[] }>());
export const LoadMovieListFail = createAction('[MovieList] Load Movie List Fail', props<{ error: any }>());


export const LoadMovieDetail = createAction('[MovieDetail] Load Movie Detail', props<{id: string}>());
export const LoadMovieDetailSuccess = createAction('[MovieDetail] Load Movie Detail Success', props<{ detail: MovieDetail }>());
export const LoadMovieDetailFail = createAction('[MovieDetail] Load Movie Detail Fail', props<{ error: any }>());
