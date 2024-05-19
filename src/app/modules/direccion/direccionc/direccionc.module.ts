import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccioncRoutingModule } from './direccionc-routing.module';
import { DireccioncDetailComponent } from './direccionc-detail/direccionc-detail.component';
import { DireccioncComponent } from '../direccion/direccionc/direccionc.component';



@NgModule({
  declarations: [
    DireccioncComponent,
    DireccioncDetailComponent
  ],
  imports: [
    CommonModule,
    DireccioncRoutingModule
  ]
})
export class DireccioncModule { }

