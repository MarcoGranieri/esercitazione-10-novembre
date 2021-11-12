import { Product } from './../product';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() selected = new EventEmitter<Product>();
  @Input() products : Product[] | undefined;

  selectedProduct! : Product;



  constructor() { }

  ngOnInit(): void {
  }

  select(product: Product) {
    this.selected.emit(product);
  }
}
