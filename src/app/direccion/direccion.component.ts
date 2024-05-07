import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Direccion } from '../models/direccion';

@Component({
  selector: 'app-direccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {
  
  direcciones : Direccion [] = [
    {
      addressId: 0,
      alias: "Jose",
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
      alias: "Carlos",
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
      alias: "Pedro",
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
      alias: "Jose L",
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
      alias: "Raul",
      street: "Los Jardines # 25",
      city: "Santiago",
      state: "Santiago",
      zipCode: "21548",
      country: "Chile",
      active: false,
      createAt: new Date ("2024-05-06"),
      clienteId: 4,
    }
  ]

}
