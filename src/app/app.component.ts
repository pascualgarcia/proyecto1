import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesComponent } from './modules/clientes/clientes/clientes.component';
import { DireccionComponent } from './modules/direccion/direccion/direccion.component';
import { ClientesModule } from './modules/clientes/clientes.module';
import { DireccionesModule } from './modules/direccion/direcciones.module';

import { DireccioncModule } from './modules/direccion/direccionc/direccionc.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientesModule, DireccionesModule, DireccioncModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
