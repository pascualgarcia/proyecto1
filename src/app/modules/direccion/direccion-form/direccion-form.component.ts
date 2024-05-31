import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-direccion-form',
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css'
})
export class DireccionFormComponent {

  formularioDireccion : FormGroup;

  constructor(private fd : FormBuilder){
    this.formularioDireccion = this.fd.group({
      alias: ['', Validators.required],
      street:['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      active: [true, Validators.required],
      createAt: [new Date(), Validators.required]
      
    })
  }
  onSubmit(){
    this.formularioDireccion.markAllAsTouched();

    console.info('Valor del formulario: ', this.formularioDireccion.value)
    console.info('Validez del formulario: ', this.formularioDireccion.valid)
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
