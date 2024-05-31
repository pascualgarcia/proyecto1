import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionDetailComponent } from './direccion-detail/direccion-detail.component';
import { ClienteDireccionesComponent } from '../clientes/cliente-direcciones/cliente-direcciones.component';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { DireccionesService } from '../../servicios/direcciones.service';
import { ClienteFormComponent } from '../clientes/cliente-form/cliente-form.component';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';



@NgModule({
  declarations: [
    DireccionComponent,
    DireccionDetailComponent,
    DireccionFormComponent 
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [
    DireccionesService,
    DireccionDetailComponent
  ]
})
export class DireccionesModule { }
