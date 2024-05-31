import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel, ReactiveFormsModule } from '@angular/forms';


import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDetailComponent } from './clientes-detail/ClientesDetailComponent';
import { DireccionesRoutingModule } from '../direccion/direcciones-routing.module';
import { ClienteDireccionesComponent } from './cliente-direcciones/cliente-direcciones.component';
import { DireccionesModule } from '../direccion/direcciones.module';
import { ClientesService } from '../../servicios/clientes.service';
import { DireccionesService } from '../../servicios/direcciones.service';
import { DireccionComponent } from '../direccion/direccion/direccion.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetailComponent,
    ClienteDireccionesComponent,
    ClienteFormComponent

  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    ClientesRoutingModule,
    DireccionesModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientesService, 
    DireccionesService
  ]
})
export class ClientesModule { }
