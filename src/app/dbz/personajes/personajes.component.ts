import { Component } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  get personajesList(){
    return this.dbzService.personajesList;
  }

  constructor( private dbzService: dbzService ){}


}
