import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {CardComponent} from './components/card/card.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {MaterialModule} from './material.module';
import {WINDOW, windowProvider} from './services/window.service';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    SidenavComponent
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [{provide: WINDOW, useFactory: windowProvider}]
})
export class ComponentsModule {
}
