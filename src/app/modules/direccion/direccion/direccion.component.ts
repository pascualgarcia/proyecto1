import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Direccion } from '../../../models/direccion';
import { Observable } from 'rxjs';
import { DireccionesService } from '../../../servicios/direcciones.service';


@Component({
  selector: 'app-direccion',
  standalone: false,
  //imports: [],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {
  
  listaDirecciones :  Observable<Direccion[]>;

  constructor(private _servicio : DireccionesService){

  }
  ngOnInit(){
    this.listaDirecciones = this._servicio.getDirecciones();
  }

}
