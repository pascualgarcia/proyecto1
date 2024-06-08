import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Direccion } from '../../../models/direccion';
import { Cliente } from '../../../models/cliente';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../servicios/clientes.service';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  formularioCliente : FormGroup;
  clientes : Observable<Cliente>;

  constructor(private fc : FormBuilder, private _servicio : ClientesService, 
    private routeManager : ActivatedRoute){
    
  }


  ngOnInit(){
    this.formularioCliente = this.fc.group({
      clienteId: [''],
      name: ['', Validators.required],
      lastName:['', Validators.required],
      cedula: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthDate: [new Date(), Validators.required],
      createdAt: [new Date(), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      active: [true, Validators.required]
    })
  

    this.routeManager.params.subscribe((params) => {
      if(params['id']){
        this._servicio.getClienteByID(+params['id']).subscribe({
          next: (value) =>{
            this.formularioCliente.patchValue(value)
          },
          error: (error) => {
            console.log(error)
          }
        })
      }
    })
  }
  onSubmit(){
    this.formularioCliente.markAllAsTouched();
    

    console.info('Valor del formulario: ', this.formularioCliente.value)
    console.info('Validez del formulario: ', this.formularioCliente.valid)

    if (this.formularioCliente.valid) {
      console.log('Guardado con exito');
    }

    if (this.formularioCliente.value.clienteId === 0) {
      this._servicio.nuevoCliente(this.formularioCliente.value).subscribe({
        next: (value) => {
          console.log('Guardado con exito', value);
        },
        error: (error) => {
          console.error('Error al guardar el cliente', error);
        },
      });
    } else {
      this._servicio.editCliente(this.formularioCliente.value).subscribe({
        next: (value) => {
          console.log('Editado con exito', value);
        },
        error: (error) => {
          console.error('Error al editar el cliente', error);
        },
      });
    }
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

