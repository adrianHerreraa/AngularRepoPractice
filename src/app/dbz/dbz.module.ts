import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { dbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent,
  ],
  // No olvides exportar el componente, si no lo exportas no jala.
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    dbzService,
  ],
})
export class DbzModule { }
