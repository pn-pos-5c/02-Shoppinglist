import {Component} from '@angular/core';
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {CartItem} from "./models/CartItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  budget = 0;
  showAddProductDialog = false;

  constructor(public productService: ProductService, public cartService: CartService) {
  }

  deleteFromCart(cartItem: CartItem): void {
    this.cartService.deleteFromCart(cartItem);
  }

  addProduct(): void {
    const button = document.getElementById('btnAddProduct');
    if (button) this.showAddProductDialog = true;
  }

  cancel() {
    this.showAddProductDialog = false;
  }
}
