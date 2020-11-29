import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {MaterialModule} from './material.module';
import {WINDOW, windowProvider} from './services/window.service';
import {SpinnerComponent} from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    CardComponent,
    SpinnerComponent
  ],
  exports: [
    CardComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [{provide: WINDOW, useFactory: windowProvider}]
})
export class SharedModule {
}
