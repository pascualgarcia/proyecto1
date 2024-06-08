import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'node:console';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl : string = "https://report-api.somee.com/api/clientes"
  updateClienteActivo(clienteId: number, nuevoEstdo: boolean) {
    throw new Error('Method not implemented.');
  }
  


  constructor(private http : HttpClient) { }
   // Obtener lista de clientes
  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map(response =>response),
      catchError(error => {
        console.error(error)
        return of([])
      })
    )
  }
  
  //Obtener cliente  buscado por ID
  getClienteByID(clienteId : number) : Observable<Cliente | undefined>{
    return this.http.get<Cliente>(this.baseUrl + '/' + clienteId).pipe(
      map(response => {
        console.table(response)
        return response
      }),
      catchError(error => {
        console.error(error)
        return of()
      })
    )
  }

  //Editar cliente
  editCliente(editandoCliente: Partial<Cliente>): Observable<Cliente | undefined> {
    return this.http.post<Cliente>(this.baseUrl, editandoCliente).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of()
      })
    )
  }

  //Crear cliente nuevo
  nuevoCliente(cliente: Partial<Cliente>): Observable<Cliente | undefined> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of();
      })
    );
  }
}
