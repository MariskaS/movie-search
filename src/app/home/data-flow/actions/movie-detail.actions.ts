import {createAction, props} from '@ngrx/store';
import {MovieDetail} from '../../../core/interfaces';

export const LoadMovieDetail = createAction('[MovieDetail] Load Movie Detail', props<{id: string}>());
export const LoadMovieDetailSuccess = createAction('[MovieDetail] Load Movie Detail Success', props<{ detail: MovieDetail }>());
export const LoadMovieDetailFail = createAction('[MovieDetail] Load Movie Detail Fail', props<{ error: any }>());
