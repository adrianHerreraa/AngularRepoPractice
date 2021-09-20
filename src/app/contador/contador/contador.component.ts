
import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        
        <h1> {{ title }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>
        
        <!-- <button (click)="sumar()" >+1</button> -->
        <!-- <button (click)="acumular(+1)" >+1</button> -->
        <button (click)="acumularPorBase(+base)" >+1</button>
        <span> {{ contador }} </span>
        <button (click)="acumularPorBase(-base)" >-1</button>
        <!-- <button (click)="acumular(-1)" >-1</button> -->
        <!-- <button (click)="restar()" >-1</button> -->

    `
})
export class ContadorComponent {
    public title: string = 'Mi contador';
  public contador: number = 0;

  // base: numero = 5
  public base: number = 5;

  sumarPorBase(valor: number){
    this.contador += valor;
  }

  restarPorBase(valor: number){
    this.contador -= valor;
  }

  acumular( valor: number ){
    this.contador += valor;
  }

  acumularPorBase(valor: number){
    this.contador += valor;
  }

  sumar(){
    this.contador += 1;
  }

  restar(){
    this.contador -= 1;
  }


}