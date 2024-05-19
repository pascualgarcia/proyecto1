import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionDetailComponent } from './direccion-detail/direccion-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'direcciones',
    pathMatch: 'full'
  },
  {
    path: 'direcciones',
    component: DireccionComponent
  },
  {
    path: 'direcciones/:id',
    component: DireccionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
