import { Injectable } from '@angular/core';
import { Direccion } from '../models/direccion';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {

  private baseUrl : string = "https://report-api.somee.com/api/addresses"
  updateDireccionActivo(direccionId: number, nuevoEstdo: boolean) {
    throw new Error('Method not implemented.');
  }
  constructor(private http : HttpClient) { }
  // Obtener lista de direcciones
 getDireccion() : Observable<Direccion[]> {
   return this.http.get<Direccion[]>(this.baseUrl).pipe(
     map(response =>response),
     catchError(error => {
       console.error(error)
       return of([])
     })
   )
 }

 //Obtener Direccion  buscado por ID
 getDireccionByID(clienteId : number) : Observable<Direccion | undefined>{
  return this.http.get<Direccion>(this.baseUrl + '/' + clienteId).pipe(
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

//Editar direccion
editDireccion(direccionData: Partial<Direccion>): Observable<Direccion | undefined> {
  return this.http.post<Direccion>(this.baseUrl, direccionData).pipe(
    map(response => response),
    catchError(error => {
      console.error(error);
      return of()
    })
  )
}

//Crear Direccion nuevo
nuevaDireccion(direccion: Partial<Direccion>): Observable<Direccion | undefined> {
  return this.http.post<Direccion>(this.baseUrl, direccion).pipe(
    map((response) => response),
    catchError((error) => {
      console.error(error);
      return of();
    })
  );
}

}
