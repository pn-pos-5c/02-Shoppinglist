import {Injectable} from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  products: Product[] = [
    {id: 1, name: 'Brot', price: 1.2},
    {id: 2, name: 'Milch', price: 0.9},
    {id: 3, name: 'Zucker', price: 1.5}
  ];

  addProduct(product: Product): void {
    this.products.push(product);
  }

}
