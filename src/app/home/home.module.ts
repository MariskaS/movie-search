import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './components/home/home.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {SharedModule} from '../shared/shared.module';
import {MovieDialogComponent} from './components/movie-dialog/movie-dialog.component';
import {MaterialModule} from '../shared/material.module';
import {StoreModule} from '@ngrx/store';
import * as fromState from './data-flow';
import {EffectsModule} from '@ngrx/effects';
import {MovieDetailEffects} from './data-flow/effects/movie-detail.effects.';
import {A11yModule} from '@angular/cdk/a11y';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    MovieListComponent,
    MovieDialogComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    A11yModule,
    EffectsModule.forFeature([MovieDetailEffects]),
    StoreModule.forFeature(
      fromState.stateFeatureKey,
      fromState.reducers,
      {metaReducers: fromState.metaReducers}
    ),
  ]
})
export class HomeModule {
}
