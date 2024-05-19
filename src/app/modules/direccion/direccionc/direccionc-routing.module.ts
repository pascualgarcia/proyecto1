import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccioncDetailComponent } from './direccionc-detail/direccionc-detail.component';
import { DireccioncComponent } from '../direccion/direccionc/direccionc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'direccionc',
    pathMatch: 'full'
  },
  {
    path: 'direccionc',
    component: DireccioncComponent
  },
  {
    path: 'direccionc/:id',
    component: DireccioncDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccioncRoutingModule { }
