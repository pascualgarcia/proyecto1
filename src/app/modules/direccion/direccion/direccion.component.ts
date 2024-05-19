import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Direccion } from '../../../models/direccion';


@Component({
  selector: 'app-direccion',
  standalone: false,
  //imports: [],
  templateUrl: './direccion.component.html',
  styleUrl: './direccionc.component.css'
})
export class DireccionComponent {
  
  direcciones : Direccion [] = [
    {
      addressId: 0,
      alias: "Escuela",
      street: "Calle Luperon # 25",
      city: "Santiago",
      state: "Santiago",
      zipCode: "51000",
      country: "República Dominicana",
      active: true,
      createAt: new Date ("2024-05-06"),
      clienteId: 0,
    },

    {
      addressId: 1,
      alias: "Casa",
      street: "Six ford St",
      city: "Haverhill",
      state: "Boston",
      zipCode: "74581",
      country: "United State",
      active: false,
      createAt: new Date ("2024-05-06"),
      clienteId: 1,
    },

    {
      addressId: 2,
      alias: "Trabajo",
      street: "Estrella Sadhala # 25",
      city: "Santiago",
      state: "Santiago",
      zipCode: "51000",
      country: "República Dominicana",
      active: true,
      createAt: new Date ("2024-05-06"),
      clienteId: 2,
    },

    {
      addressId: 3,
      alias: "Colegio",
      street: "8400 Av 100 ST",
      city: "Doral",
      state: "Miami",
      zipCode: "59854",
      country: "United State",
      active: true,
      createAt: new Date ("2024-05-06"),
      clienteId: 3,
    },

    {
      addressId: 4,
      alias: "Casa",
      street: "Los Jardines # 25",
      city: "Santiago",
      state: "Santiago",
      zipCode: "21548",
      country: "Chile",
      active: false,
      createAt: new Date ("2024-05-06"),
      clienteId: 4,
    },
    {
      addressId: 5,
      alias: "Play",
      street: "Los Prados # 25",
      city: "Santiago",
      state: "Santiago",
      zipCode: "21548",
      country: "Chile",
      active: false,
      createAt: new Date ("2024-05-06"),
      clienteId: 5,
    }
  ]

}
