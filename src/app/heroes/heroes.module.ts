
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        //Son los componentes del modulo.
        HeroeComponent,
        ListadoComponent,
    ],
    exports: [
        ListadoComponent,
    ],
    imports: [
        // El CommonModule, es necesario para usar directivas particulares de angular como el *NgIf=""
        CommonModule,
    ],
})
export class HeroesModule {

}