import { Component} from '@angular/core';
import { FormularioService, Formulario } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent  {
  cedula: string='';
  nombre: string='';
  fechan: Date= new Date();
  ciudad: string='';
  mensaje: string='';
  constructor(private _formularioService: FormularioService){}

  onSubmit() {
    const nuevoFormulario: Formulario = {
      cedula: this.cedula,
      nombre: this.nombre,
      fechan: this.fechan,
      ciudad: this.ciudad
    };
    this.cedula = '';
    this.nombre = '';
    this.fechan = new Date();
    this.ciudad = '';
    this.mensaje= 'Datos ingresados! Gracias por probar este formulario, ' + nuevoFormulario.nombre + '.';
  }
  limpiarFormulario() {
    // Restablecer los valores de las propiedades utilizadas en el enlace de datos del formulario
    this.cedula = '';
    this.nombre = '';
    this.fechan = new Date();
    this.ciudad = '';
  }
}  