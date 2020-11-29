import {createAction, props} from '@ngrx/store';
import {MovieListItem} from '../../core/interfaces';

export const LoadMovieList = createAction('[MovieList] Load Movie List', props<{ name: string }>());
export const LoadMovieListSuccess = createAction('[MovieList] Load Movie List Success', props<{ list: MovieListItem[] }>());
export const LoadMovieListFail = createAction('[MovieList] Load Movie List Fail', props<{ error: any }>());

