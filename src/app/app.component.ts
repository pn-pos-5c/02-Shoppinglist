import { Component } from '@angular/core';
import { Product } from "./models/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  budget = 0;

  products: Product[] = [
    {name: 'Brot', price: 1.2},
    {name: 'Milch', price: 0.9},
    {name: 'Zucker', price: 1.5}
  ];

  shoppingList: CartItem[] = [];
}
