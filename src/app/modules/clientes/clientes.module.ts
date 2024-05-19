import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDetailComponent } from './clientes-detail/ClientesDetailComponent';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetailComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
