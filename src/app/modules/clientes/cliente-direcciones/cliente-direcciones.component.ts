import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion'; 
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { privateDecrypt } from 'crypto';
import { DireccionesService } from '../../../servicios/direcciones.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cliente-direcciones',
  standalone: false,
  //imports: [],
  templateUrl: './cliente-direcciones.component.html',
  styleUrl: './cliente-direcciones.component.css'
})
export class ClienteDireccionesComponent {


  direccionesLista : Observable<Direccion>
    
     constructor(private routeManager : ActivatedRoute, private _servicio : DireccionesService) {
    
  } 

  ngOnInit(){
    this.routeManager.params.subscribe((params) => {
      if(params['id']){
        this.direccionesLista = this._servicio.getDireccionesClienteByID(+params['id']);
       }
     })

  }

}
