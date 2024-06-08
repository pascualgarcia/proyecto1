import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../servicios/clientes.service';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-clientes-detail',
  standalone: false,
  templateUrl: './clientes-detail.component.html',
  styleUrl: './clientes-detail.component.css'
})
export class ClientesDetailComponent {

client : Cliente;



  constructor(private routeManager: ActivatedRoute, private _servicio : ClientesService) {
  }
  ngOnInit(){
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getClienteByID(+params['id']).subscribe({
          next: (value) =>{
            this.client = value
          },
          error: (error) => {
            console.log(error)
          }
      })
    }
  })
  }

  // activar(cliente : Cliente){
  //   cliente.active = true;
  //   this._servicio.editCliente(cliente);
  // }

  // desactivar(cliente : Cliente){
  //   cliente.active = false;
  //   this._servicio.editCliente(cliente);
  // }
}


