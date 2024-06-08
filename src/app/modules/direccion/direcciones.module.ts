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
import { HttpClientModule } from '@angular/common/http';
import { ClientesService } from '../../servicios/clientes.service';



@NgModule({
  declarations: [
    DireccionComponent,
    DireccionDetailComponent,
    DireccionFormComponent 
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [
    DireccionesService,
    DireccionDetailComponent,
    ClientesService,
    DireccionFormComponent
   
  ]
})
export class DireccionesModule { }
