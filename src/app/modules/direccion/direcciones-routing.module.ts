import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionDetailComponent } from './direccion-detail/direccion-detail.component';
import { NgModel } from '@angular/forms';
import { ClienteFormComponent } from '../clientes/cliente-form/cliente-form.component';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'direcciones',
  //   pathMatch: 'full',
  // },
   {
    path: 'direcciones',
    component: DireccionComponent
  },
   {
   path: 'direcciones/:id',
    component: DireccionDetailComponent
  },
  {
    path: 'form-direccion/:id',
     component: DireccionFormComponent
   },
  {
     path: 'form-cliente',
    component: ClienteFormComponent
   },
    {
     path: 'form-cliente:id',
     component: ClienteFormComponent
    },
   {
    path: 'form-direccion',
    component:  DireccionFormComponent
   },
    {
    path: 'cliente-direcciones/:ClienteId',
    component: DireccionDetailComponent
   },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
