import { Product } from './../product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product! : Product;
  @Output() selected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  select(product: Product) {
    this.selected.emit(product);
  }

}
