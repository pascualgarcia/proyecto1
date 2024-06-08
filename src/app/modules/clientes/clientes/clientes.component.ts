import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../models/cliente';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../servicios/clientes.service';


@Component({
  selector: 'app-clientes',
  standalone: false,
  //imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  listaClientes : Cliente[]; 
  
  constructor(private _servicio : ClientesService){
    

  }

  ngOnInit(){
    this._servicio.getClientes().subscribe({
      next: (value) => {
        this.listaClientes = value
      },
      error: (error) =>(
        console.error(error)
      )
    })
  }

  
}
