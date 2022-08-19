import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarterComponent } from './starter.component';
import { StarterRoutes } from './starter.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(StarterRoutes)
  ],
  declarations: [StarterComponent]
})
export class StarterModule {}
