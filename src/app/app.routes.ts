import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule)
        
    },

    {
        path: '',
        loadChildren: () => import('./modules/direccion/direcciones.module').then(n => n.DireccionesModule)
        
    }
]




