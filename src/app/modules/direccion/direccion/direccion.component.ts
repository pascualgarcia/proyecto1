import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Direccion } from '../../../models/direccion';
import { Observable } from 'rxjs';
import { DireccionesService } from '../../../servicios/direcciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direccion',
  standalone: false,
  //imports: [],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {
  
  listaDirecciones : Direccion[];

  constructor(private _servicio : DireccionesService){

  }
  ngOnInit(){
    this._servicio.getDireccion().subscribe({
      next: (value) => {
        this.listaDirecciones = value
      },
      error: (error) =>(
        console.error(error)
      )
    })
  }
}
