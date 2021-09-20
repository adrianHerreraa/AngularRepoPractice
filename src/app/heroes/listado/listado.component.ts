import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroesList: string[] = ['Spiderman', 'Iromman', 'Hulk', 'Thor', 'Star Lord'];
  public heroesBorrados: string[] = [];

  public borrarHeroe(){

    if(this.heroesList.length != 0){
      const heroeBorrado = this.heroesList.shift();
      this.heroesBorrados.push(heroeBorrado ?? '');
      console.log(heroeBorrado);
    }
    
  }

}
