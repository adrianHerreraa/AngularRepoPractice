import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor( private dbzService: dbzService ){}

  // @Output()
  // Asegurate de importar el EventEmitter de la libreria de @angular/core.
  // Es como un stream (pero se llama emitter), aquí se crea.
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  agregar(){

    if(this.nuevo.nombre.trim().length === 0) { return; }
    // Aquí se llena el "stream", que en realidad es un emitter.
    // this.onNuevoPersonaje.emit( this.nuevo );

    this.dbzService.agregarPersonaje( this.nuevo );

    
    this.nuevo = {
      nombre: '',
      poder: 0,
    }

  }
}
