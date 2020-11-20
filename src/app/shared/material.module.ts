import {NgModule} from "@angular/core";

import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const modules = [
  MatDialogModule,
  MatSidenavModule,
  MatIconModule,
  MatProgressSpinnerModule,
];

@NgModule({
  exports: modules,
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})
export class MaterialModule {}
