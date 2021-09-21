import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Tarea eliminar las importaciones e importar el módulo creado.
// import { ContadorComponent } from './contador/contador/contador.component';

// Como ya se creo un modulo donde se exportan los modulos, ya no es necesario ponerlos aquí, y solo importar el module general.
/*import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';*/
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
