import {NgModule} from '@angular/core';

import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

const modules = [
  MatDialogModule,
  MatSidenavModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSnackBarModule,
];

@NgModule({
  exports: modules,
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        duration: 5000,
    }}
  ]
})
export class MaterialModule {
}
