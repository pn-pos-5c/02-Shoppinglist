import {Component} from '@angular/core';
import {CartService} from "./services/cart.service";
import {CartItem} from "./models/CartItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  budget = 0;

  constructor(public cartService: CartService) {
  }

  deleteFromCart(cartItem: CartItem): void {
    this.cartService.deleteFromCart(cartItem);
  }
}
