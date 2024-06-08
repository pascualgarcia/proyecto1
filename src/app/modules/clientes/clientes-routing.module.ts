import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDetailComponent } from './clientes-detail/ClientesDetailComponent';
import { ClienteDireccionesComponent } from './cliente-direcciones/cliente-direcciones.component';
import { NgModel } from '@angular/forms';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full',
  },
  {
    path: 'clientes',
     component: ClientesComponent
   },
   {
    path: 'form-cliente/:id',
    component: ClienteFormComponent
   },
   {
    path: 'clientes/:id',
    component: ClientesDetailComponent
   },
  {
    path: 'cliente-direcciones/:ClienteId',
    component:  ClientesDetailComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
