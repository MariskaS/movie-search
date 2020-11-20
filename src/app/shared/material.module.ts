import {NgModule} from '@angular/core';

import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

const modules = [
  MatDialogModule,
  MatSidenavModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule
];

@NgModule({
  exports: modules,
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})
export class MaterialModule {}
