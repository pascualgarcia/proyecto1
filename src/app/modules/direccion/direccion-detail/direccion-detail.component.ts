import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { DireccionesService } from '../../../servicios/direcciones.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-direccion-detail',
  standalone: false,
  //imports: [],
  templateUrl: './direccion-detail.component.html',
  styleUrl: './direccion-detail.component.css'
})
export class DireccionDetailComponent {


    direcc : Direccion;

      constructor(private routeManager: ActivatedRoute, private _servicio : DireccionesService) {
    
   }
   ngOnInit(){
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getDireccionByID(+params['id']).subscribe({
          next: (value) =>{
            this.direcc = value
          },
          error: (error) => {
            console.log(error)
          }
      })
    }
 
})
}
}


