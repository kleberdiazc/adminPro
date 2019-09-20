import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress', null) txtProgress: ElementRef;
  @Input()leyenda: string = 'Leyenda';
  @Input()porcentaje: number = 1;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { 
    console.log('Leyenda', this.leyenda );
    console.log('Progreso', this.porcentaje );
  }

  ngOnInit() {
  }

  onChange(newValue: number) {

    // const elemHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(elemHTML.value);
    if ( newValue >= 100){
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    this.txtProgress.nativeElement.value = this.porcentaje;
    // elemHTML.value = Number(this.porcentaje);
    this.cambioValor.emit(this.porcentaje);
  }
  cambiarValor(valor: number) {
    if( this.porcentaje >= 100) {
      return;
    }

    if( this.porcentaje <= 0){
      return;
    }
    this.porcentaje =  this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }

}
