import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  name = '';
  price = 0.0;
  @Output() showAddProductDialog = new EventEmitter();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    const product: Product = {
      id: this.productService.getNextId(),
      name: this.name,
      price: this.price
    };

    this.productService.addProduct(product);

    this.showAddProductDialog.emit();
  }

  cancel() {
    this.showAddProductDialog.emit();
  }
}
