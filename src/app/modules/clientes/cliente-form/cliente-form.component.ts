import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  formularioCliente : FormGroup;

  constructor(private fc : FormBuilder){
    this.formularioCliente = this.fc.group({
      name: ['', Validators.required],
      lastName:['', Validators.required],
      cedula: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthDate: [new Date(), Validators.required],
      createAt: [new Date(), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      active: [true, Validators.required]
    })
  }
  onSubmit(){
    this.formularioCliente.markAllAsTouched();

    console.info('Valor del formulario: ', this.formularioCliente.value)
    console.info('Validez del formulario: ', this.formularioCliente.valid)
  }

  public getError(controlName: string, name: string){
    if(this.formularioCliente.get(controlName) != null
        && this.formularioCliente.get(controlName).touched
        && this.formularioCliente.get(controlName).invalid){
          if(this.formularioCliente.get(controlName).hasError('required')){
            return `El campo ${name} es obligatorio.`;
          }else if(this.formularioCliente.get(controlName).hasError('minlength')){
            return `El campo ${name} debe tener al menos 11 digitos.`
          }else if(this.formularioCliente.get(controlName).hasError('maxlength')){
            return `El campo ${name} debe tener como  maximo 11 digitos.`
          }else if(this.formularioCliente.get(controlName).hasError('email')){
            return `El campo ${name} debe tener formato de.`
          }
        }
        return '';
  }
}
