import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AddCartItemComponent} from './components/add-cart-item/add-cart-item.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {ProductsComponent} from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCartItemComponent,
    AddProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
