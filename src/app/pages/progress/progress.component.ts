import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje: number = 1;
  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor : number){
    if( this.porcentaje >= 100){
      return;
    }

    if( this.porcentaje <= 0){
      return;
    }
    this.porcentaje =  this.porcentaje + valor
  }

}
