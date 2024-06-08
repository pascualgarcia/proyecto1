import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DireccionesService } from '../../../servicios/direcciones.service';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute, RouterModule, Route } from '@angular/router';

@Component({
  selector: 'app-direccion-form',
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css'
})
export class DireccionFormComponent {
   formularioDireccion : FormGroup;
   Direccion : Observable<Direccion>;

   constructor(private fd : FormBuilder, private _servicio : DireccionesService, 
    private routeManager : ActivatedRoute){
    
  }

  ngOnInit(){
    this.formularioDireccion = this.fd.group({
      addressId: [''],
      alias: ['', Validators.required],
      street:['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      active: [true, Validators.required],
      createAt: [new Date(), Validators.required],
      clienteId:[ '', Validators.required]
      
    })

    this.routeManager.params.subscribe((params) => {
      if(params['id']){
        this._servicio.getDireccionByID(+params['id']).subscribe({
          next: (value) =>{
            this.formularioDireccion.patchValue(value)
          },
          error: (error) => {
            console.log(error)
          }
        })
      }
    })
  }
  onSubmit(){
    this.formularioDireccion.markAllAsTouched();

    console.info('Valor del formulario: ', this.formularioDireccion.value)
    console.info('Validez del formulario: ', this.formularioDireccion.valid)

    if (this.formularioDireccion .valid) {
      console.log('Guardado con exito');
    }

    if (this.formularioDireccion .value.addressId === 0) {
      this._servicio.nuevaDireccion(this.formularioDireccion .value).subscribe({
        next: (value) => {
          console.log('Guardado con exito', value);
        },
        error: (error) => {
          console.error('Error al guardar la dirrecion', error);
        },
      });
    } else {
      this._servicio.editDireccion(this.formularioDireccion .value).subscribe({
        next: (value) => {
          console.log('Editado con exito', value);
        },
        error: (error) => {
          console.error('Error al editar el dirrecion', error);
        },
      });
    }
  }
  

  public getError(controlName: string, name: string){
    if(this.formularioDireccion.get(controlName) != null
        && this.formularioDireccion.get(controlName).touched
        && this.formularioDireccion.get(controlName).invalid){
          if(this.formularioDireccion.get(controlName).hasError('required')){
            return `El campo ${name} es obligatorio.`;
          }else if(this.formularioDireccion.get(controlName).hasError('minlength')){
            return `El campo ${name} debe tener al menos 11 digitos.`
          }else if(this.formularioDireccion.get(controlName).hasError('maxlength')){
            return `El campo ${name} debe tener como  maximo 11 digitos.`
          }else if(this.formularioDireccion.get(controlName).hasError('email')){
            return `El campo ${name} debe tener formato de.`
          }
        }
        return '';
  }

}
