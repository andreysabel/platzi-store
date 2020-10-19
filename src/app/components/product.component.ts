import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../product.model';


@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.scss']
})

export class ProducComponent implements OnInit, DoCheck, OnDestroy{

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(){
      console.log('1. constructor');
  }

  /*ngOnChanges(changes: SimpleChanges): void {
     console.log('2. ngOnChanges');
     console.log('changes', changes);
  } */

  ngOnInit(): void {
      console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
     console.log('doCheck');
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
  }

  addtoCart(): void{
    console.log('Agregando al carrito');
    this.productClicked.emit(this.product.id);
  }

}
