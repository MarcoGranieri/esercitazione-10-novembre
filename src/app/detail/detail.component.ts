import { Product } from './../product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() product! : Product;
  @Output() delete = new EventEmitter<Product>();
  @Output() buy = new EventEmitter<Product>();





  constructor() { }

  ngOnInit(): void {
  }

  deselect(product: Product) {
    this.delete.emit(product);
  }

  buyProduct(product:Product){
    this.buy.emit(product);
  }

}
