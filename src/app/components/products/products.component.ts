import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  showAddProductDialog = false;

  constructor(public productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    const button = document.getElementById('btnAddProduct');
    if (button) this.showAddProductDialog = true;
  }

  cancel() {
    this.showAddProductDialog = false;
  }

}
