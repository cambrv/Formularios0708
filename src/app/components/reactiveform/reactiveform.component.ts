import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  formulario: FormGroup;
  mensaje: string='';
  constructor(private _formBuilder: FormBuilder){
    this.formulario = this._formBuilder.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      fecha: [null, [Validators.required]],
      ciudad: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.formulario = this._formBuilder.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      fecha: [null, [Validators.required]],
      ciudad: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log(formData);
      this.mensaje= 'El formulario reactivo ha sido validado, gracias por probarlo';
    }
  }
  limpiarFormulario() {
    this.formulario.reset();
  }
}
