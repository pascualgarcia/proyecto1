import { Component } from '@angular/core';
//import { Cliente } from '../../../models/cliente';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../../models/cliente';


@Component({
  selector: 'app-clientes',
  standalone: false,
  //imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes : Cliente[] = [
    {
      clienteId: 0,
      name: "Jose",
      lastName: "Parra",
      cedula: "05609876570",
      birthDate: new Date("1985-04-04"),
      createAt: new Date("2024-04-04"),
      email: "prueba@prueba.com.",
      active: false
    },

    {
      clienteId: 1,
      name: "Carlos",
      lastName: "Villagram",
      cedula: "05609876222",
      birthDate: new Date("1995-04-04"),
      createAt: new Date("2024-04-04"),
      email: "prueba1@prueba.com.",
      active: true
    },

    {
      clienteId: 2,
      name: "Pedro",
      lastName: "Garcia",
      cedula: "05609876000",
      birthDate: new Date("1990-04-04"),
      createAt: new Date("2024-04-04"),
      email: "prueba1@prueba2.com.",
      active: false
    },

    {
      clienteId: 3,
      name: "Jose L",
      lastName: "Gido",
      cedula: "05609876111",
      birthDate: new Date("1998-04-04"),
      createAt: new Date("2024-04-04"),
      email: "prueba1@prueba3.com.",
      active: true
    },

    {
      clienteId: 4,
      name: "Raul",
      lastName: "Ramirez",
      cedula: "05609876333",
      birthDate: new Date("2000-04-04"),
      createAt: new Date("2024-04-04"),
      email: "prueba1@prueb4.com.",
      active: true
    }
  ]

}
