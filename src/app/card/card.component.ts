import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: "Naruto Funko POP",
      description: "lorem ipsum",
      img: "https://prod-giuntialpunto-static.giunti.stormreply.com/images/I/41cDbR77luL._SL500_.jpg",
      price: 60,
      exitYear: 2010,
      productHeight: 140,
      productWeight: 200,
      itemsProduced: 10000
    },
    {
      id: 2,
      title: "Batman Funko POP",
      description: "lorem ipsum",
      img: "https://www.giocabenesrl.it/images/articoli/dem/regular/36879-3.jpg",
      price: 40,
      exitYear: 2015,
      productHeight: 140,
      productWeight: 250,
      itemsProduced: 8000
    },
    {
      id: 3,
      title: "Squid Game Funko POP",
      description: "lorem ipsum",
      img: "https://www.thegamebusters.it/23144-large_default/funko-pop-red-soldier-mask-squid-game.jpg",
      price: 120,
      exitYear: 2021,
      productHeight: 140,
      productWeight: 280,
      itemsProduced: 1000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
