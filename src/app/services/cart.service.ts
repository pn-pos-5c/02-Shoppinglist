import {Injectable} from '@angular/core';
import {CartItem} from "../models/CartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  constructor() {
  }

  addToCart(cartItem: CartItem): void {
    this.cartItems.push(cartItem);
  }

  deleteFromCart(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter(item => item !== cartItem);
  }

  total(): number {
    return this.cartItems.reduce((a, b) => a + (b.price), 0);
  }

}
