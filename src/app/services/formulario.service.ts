import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private form: Formulario [] = [];
  constructor() {
    console.log("Servicio listo para usar.");  
   }
   getFormularios(): Formulario[] {
    return this.form;
  }
}
export interface Formulario{
  cedula: string,
  nombre: string,
  fechan: Date,
  ciudad: string
}