import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class dbzService {


    private _personajesList: Personaje[] = [
        {
          nombre: 'Karin',
          poder: 4000,
        },
        {
          nombre: 'Picoro',
          poder: 1400,
        }
    ];

    get personajesList(): Personaje[] {
        return [...this._personajesList];
    }

    constructor(){}

    agregarPersonaje( personaje: Personaje ){
        this._personajesList.push( personaje );
    }


}