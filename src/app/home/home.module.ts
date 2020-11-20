import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './components/home/home.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {ComponentsModule} from '../shared/components.module';
import {MovieDialogComponent} from './components/movie-dialog/movie-dialog.component';
import {MaterialModule} from '../shared/material.module';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


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
        ComponentsModule,
        MaterialModule,
        StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, {metaReducers: fromState.metaReducers})
    ]
})
export class HomeModule {}