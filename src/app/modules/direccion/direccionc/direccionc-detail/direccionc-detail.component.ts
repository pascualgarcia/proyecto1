import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../../../models/direccion';


@Component({
  selector: 'app-direccionc-detail',
  standalone: false,
  //imports: [],
  templateUrl: './direccionc-detail.component.html',
  styleUrl: './direccionc-detail.component.css'
})
export class DireccioncDetailComponent {

  direccionesc : Direccion [] = [
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

  direccionc: Direccion = new Direccion();

  constructor(private routeManager: ActivatedRoute) {
    this.routeManager.params.subscribe((params) => {
      const clienteId = params['id'];
      if (clienteId) {
        this.direccionesc = this.direccionesc.filter(
          (d) => d.clienteId == clienteId
        );

      console.log(this.direccionesc)
      }
    });
  }
}
