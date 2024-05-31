import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesModule } from './modules/clientes/clientes.module';
import { DireccionesModule } from './modules/direccion/direcciones.module';
import { NgModel } from '@angular/forms';
import { ClienteDireccionesComponent } from './modules/clientes/cliente-direcciones/cliente-direcciones.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientesModule, DireccionesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app1.0';
}
