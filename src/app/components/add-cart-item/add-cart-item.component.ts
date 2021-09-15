import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {CartItem} from "../../models/CartItem";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-add-cart-item',
  templateUrl: './add-cart-item.component.html',
  styleUrls: ['./add-cart-item.component.scss']
})
export class AddCartItemComponent implements OnInit {
  amount = 0;
  selectedId: number = this.productService.products[0].id;

  constructor(public productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    const selectedProduct = this.productService.products.find(prod => prod.id == this.selectedId);

    if (selectedProduct) {

      const cartItem: CartItem = {
        name: selectedProduct.name,
        amount: this.amount,
        price: selectedProduct.price * this.amount
      };

      this.cartService.addToCart(cartItem);
    }
  }

}
