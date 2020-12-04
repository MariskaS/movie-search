import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {MaterialModule} from './material.module';
import {WINDOW, windowProvider} from './services/window.service';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {A11yModule} from '@angular/cdk/a11y';

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
        MaterialModule,
        A11yModule
    ],
  providers: [{provide: WINDOW, useFactory: windowProvider}]
})
export class SharedModule {
}
